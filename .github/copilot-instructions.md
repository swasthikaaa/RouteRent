# RouteRent Mobile App - Development Guide

## Project Setup Instructions

This is a React Native mobile application built with Expo for the RouteRent vehicle rental platform in Sri Lanka.

### Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the app**
   ```bash
   npm start
   ```

3. **Open in simulator or device**
   - Press `i` for iOS
   - Press `a` for Android
   - Press `w` for web
   - Or scan QR code with Expo Go app

### Project Structure

- `app/components/` - Reusable UI components (Button, Card, Search Bar, etc.)
- `app/screens/` - App screens (Home, Search, Booking, Profile, etc.)
- `app/navigation/` - Navigation setup (Bottom tabs, stack navigation)
- `app/constants/` - Design system (colors, typography, spacing)

### Key Technologies

- React Native
- Expo
- React Navigation
- React Native Gesture Handler
- Reanimated

### Features Implemented

- ✅ Home screen with vehicle carousel
- ✅ Advanced search and filtering
- ✅ Vehicle detail pages with carousel
- ✅ Multi-step booking process
- ✅ Booking confirmation
- ✅ User profile management
- ✅ Bottom tab navigation
- ✅ Complete design system

### Available Scripts

```bash
npm start              # Start development server
npm run android        # Build and run on Android
npm run ios           # Build and run on iOS
npm run web           # Run on web browser
npm run prebuild      # Prebuild native code
npm run lint          # Run linter
npm run test          # Run tests
```

### Design System

Colors, typography, and spacing are centralized in `app/constants/` for consistency across the app.

### For Submission

- GitHub link: Share this repository
- Figma link: Create designs in Figma based on mockups provided
- Written summary: Document your design decisions and approach
