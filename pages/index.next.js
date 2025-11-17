export async function getStaticProps() {
  return {
    props: {},
    revalidate: 3600 // Revalidate every hour
  };
}

export { default } from '../App';
