Title: RouteRent — Tourist Vehicle Rental App (Sri Lanka)
Author: Swasthika Lingaraj
Repository: https://github.com/swasthikaaa/RouteRent
Live Demo: (add Vercel URL after deploy)

Executive Summary
RouteRent is a production-ready React Native (Expo) mobile application designed for tourists in Sri Lanka to discover, compare, and book rental vehicles quickly and confidently. The project includes a complete design system, seven app screens (Home, Search, Vehicle Detail, Booking, Booking Confirmation, Profile, Bookings), and a set of reusable components. The codebase is structured for maintainability and reusability, with centralized design tokens for colors, typography and spacing, modular navigation, and mock data for demonstrations. The repository also includes deployment configuration for Vercel and comprehensive documentation (README, design rationale, deployment guide).

Key Features
- Discovery-driven Home screen with featured vehicle carousel and filters.
- Advanced search with multi-criteria filtering (price, rating, car type).
- Vehicle detail pages with image carousel, specs, owner contact, and trust signals.
- Multi-step booking flow (date selection, extras, payment summary) and confirmation screen.
- Profile and bookings management screens.
- Modular, reusable UI components (Button, VehicleCard, SearchBar, FilterChips, Divider).
- Centralized design system (`app/constants`) and accessible color/typography choices.

Technical Architecture
- Framework: Expo (React Native) for cross-platform mobile development.
- Navigation: React Navigation (bottom tabs + stacks).
- Web support: Configured for Expo web export (optional).
- State/data: Mock data provided in `app/utils/mockData.js` with clear API stub (`app/utils/api.js`) for future backend integration.
- Deployment: Vercel configuration (`vercel.json`) and export scripts included. Environment variables are defined in `.env.production` (placeholders for real keys).

How to run locally
1. Clone: `git clone https://github.com/swasthikaaa/RouteRent.git`
2. Install: `cd RouteRent` then `npm ci` (or `npm install --legacy-peer-deps`)
3. Start mobile dev server: `npm start` (Expo)
4. Optional web export: `npm run build` (produces `dist/`)

Deliverables in the repo
- `App.js` — app entry
- `app/screens/` — all screens
- `app/components/` — reusable UI components
- `app/constants/` — design tokens (colors, typography, spacing)
- `app/utils/` — helpers, api stub, mock data
- `README.md`, `DESIGN_DECISIONS.md`, `DEPLOY_TO_VERCEL.md`, `QUICK_SUBMISSION_GUIDE.md` — documentation
- `vercel.json`, `.npmrc`, `.env.production` (placeholders) — deployment config

Contact
Email: swasthikalingaraj@gmail.com

Notes
- Replace placeholder environment keys with production values in Vercel dashboard before going live.
- Add Vercel live URL to the top of this document after deployment.
