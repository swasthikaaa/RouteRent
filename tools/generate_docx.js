const fs = require('fs');
const { Document, Packer, Paragraph, HeadingLevel, TextRun } = require('docx');

// Read SUMMARY.md
const md = fs.readFileSync('SUMMARY.md', 'utf8');

// Simple parser: split by lines and create paragraphs; treat lines that start with 'Title:' or 'Author:' specially
const lines = md.split(/\r?\n/);
const doc = new Document();

let i = 0;
while (i < lines.length) {
  const line = lines[i].trim();
  if (!line) {
    i++;
    continue;
  }

  if (line.startsWith('Title:')) {
    const title = line.replace('Title:', '').trim();
    doc.addSection({
      children: [
        new Paragraph({
          text: title,
          heading: HeadingLevel.TITLE,
        }),
        new Paragraph(''),
      ],
    });
    i++;
    continue;
  }

  if (line.startsWith('Author:')) {
    const author = line.replace('Author:', '').trim();
    doc.addSection({
      children: [new Paragraph({ text: `Author: ${author}`, heading: HeadingLevel.HEADING_3 }), new Paragraph('')],
    });
    i++;
    continue;
  }

  // Headings (Executive Summary, Key Features, etc.)
  if (/^[A-Z].*[A-Za-z]$/.test(line) && lines[i+1] && lines[i+1].trim() === '') {
    doc.addSection({ children: [new Paragraph({ text: line, heading: HeadingLevel.HEADING_1 }), new Paragraph('')] });
    i += 2; // skip blank
    continue;
  }

  // Bulleted lists
  if (line.startsWith('- ')) {
    // collect consecutive bullets
    const bullets = [];
    while (i < lines.length && lines[i].trim().startsWith('- ')) {
      bullets.push(lines[i].trim().substring(2));
      i++;
    }
    bullets.forEach(b => {
      doc.addSection({ children: [new Paragraph({ text: b, bullet: { level: 0 } })] });
    });
    doc.addSection({ children: [new Paragraph('')] });
    continue;
  }

  // Normal paragraph
  doc.addSection({ children: [new Paragraph({ text: line }), new Paragraph('')] });
  i++;
}

// The above approach creates multiple sections; instead create a single section
// Build a better document by re-parsing and collecting paragraphs
const buildDoc = () => {
  const children = [];
  let j = 0;
  while (j < lines.length) {
    const l = lines[j].trim();
    if (!l) { j++; continue; }
    if (l.startsWith('Title:')) {
      children.push(new Paragraph({ text: l.replace('Title:', '').trim(), heading: HeadingLevel.TITLE }));
      children.push(new Paragraph(''));
      j++;
      continue;
    }
    if (l.startsWith('Author:')) {
      children.push(new Paragraph({ text: `Author: ${l.replace('Author:', '').trim()}`, heading: HeadingLevel.HEADING_3 }));
      children.push(new Paragraph(''));
      j++;
      continue;
    }
    if (l.endsWith('Summary') || l === 'Key Features' || l === 'Technical Architecture' || l === 'How to run locally' || l === 'Deliverables in the repo' || l === 'Contact' || l === 'Notes') {
      children.push(new Paragraph({ text: l, heading: HeadingLevel.HEADING_1 }));
      j++;
      // collect following lines until blank or next heading
      while (j < lines.length && lines[j].trim() !== '' && !lines[j].startsWith('- ') && !lines[j].match(/^[A-Z].*/)) {
        children.push(new Paragraph(lines[j]));
        j++;
      }
      children.push(new Paragraph(''));
      continue;
    }
    if (l.startsWith('- ')) {
      // bullet
      children.push(new Paragraph({ text: l.substring(2), bullet: { level: 0 } }));
      j++;
      continue;
    }
    children.push(new Paragraph(l));
    children.push(new Paragraph(''));
    j++;
  }
  return children;
}

const children = buildDoc();

const finalDoc = new Document({ sections: [{ children }] });

Packer.toBuffer(finalDoc).then((buffer) => {
  fs.writeFileSync('ROUTERENT_SUBMISSION.docx', buffer);
  console.log('ROUTERENT_SUBMISSION.docx created');
}).catch(err => {
  console.error(err);
  process.exit(1);
});
