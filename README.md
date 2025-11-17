# RouteRent - Vehicle Rental Mobile App

A modern, feature-rich React Native mobile application designed to connect tourists visiting Sri Lanka with local vehicle owners for convenient vehicle rentals.

## 🎯 Project Overview

RouteRent is a comprehensive vehicle rental platform built with React Native, Expo, and modern mobile design principles. The app enables tourists to easily search, book, and rent vehicles from local owners in Sri Lanka.

### Key Features

✅ **Home Screen** - Discover featured vehicles, map view, and personalized recommendations  
✅ **Search & Filter** - Advanced filtering by vehicle type, price, ratings, and features  
✅ **Vehicle Listings** - Detailed vehicle information with image carousel and specs  
✅ **Booking Flow** - Multi-step booking process with date/time selection  
✅ **Insurance & Add-ons** - Flexible insurance options and vehicle extras  
✅ **Payment Integration** - Multiple payment method support  
✅ **Booking Confirmation** - Confirmation details with QR code and owner info  
✅ **User Profiles** - User dashboard with booking history and preferences  
✅ **Bottom Tab Navigation** - Seamless navigation between Home, Search, Bookings, Chat, and Profile  

## 🏗️ Project Structure

```
routerent/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── Button.js
│   │   ├── VehicleCard.js
│   │   ├── SearchBar.js
│   │   ├── FilterChips.js
│   │   ├── Divider.js
│   │   └── index.js
│   ├── screens/             # App screens
│   │   ├── HomeScreen.js
│   │   ├── SearchScreen.js
│   │   ├── VehicleDetailScreen.js
│   │   ├── BookingScreen.js
│   │   ├── BookingConfirmationScreen.js
│   │   ├── ProfileScreen.js
│   │   ├── BookingsScreen.js
│   │   └── index.js
│   ├── navigation/          # Navigation structure
│   │   ├── RootNavigator.js
│   │   ├── BottomTabNavigator.js
│   │   ├── HomeStackNavigator.js
│   │   ├── ProfileStackNavigator.js
│   │   └── index.js
│   ├── constants/           # Design system & constants
│   │   ├── colors.js        # Color palette
│   │   ├── typography.js    # Font styles
│   │   ├── spacing.js       # Spacing & border radius
│   │   └── index.js
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│
├── App.js                   # Root component
├── app.json                 # Expo configuration
├── package.json             # Dependencies
├── babel.config.js          # Babel configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: #FF6B35 (Vibrant Orange) - Brand color for CTAs
- **Secondary**: #0066CC (Ocean Blue) - Trust and reliability
- **Accent**: #FFB703 (Golden) - Highlighting ratings
- **Success**: #06C167 (Green) - Confirmations
- **Error**: #FF4757 (Red) - Warnings
- **Text**: #1A2332 (Navy) - Primary text
- **Background**: #FFFFFF (White) - Primary background
- **Surface**: #F5F5F5 (Light Gray) - Secondary backgrounds

### Typography
- **Headings**: Poppins (Bold/Semi-bold) - 32px, 24px, 18px
- **Body**: Inter (Regular) - 16px, 14px
- **Captions**: Inter (Regular) - 12px

### Spacing System
- xs: 4px | sm: 8px | md: 12px | base: 16px | lg: 24px | xl: 32px | xxl: 48px

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI: `npm install -g expo-cli`

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd RouteRent
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

5. **Run on device/emulator**
   - **iOS**: Press `i` in the terminal or scan QR code with Camera app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal

## 📱 Features Overview

### 1. Home Screen
- User greeting and location display
- Vehicle type filter chips
- Interactive map view (placeholder)
- Featured vehicles carousel
- Recent search history

### 2. Search & Filter Screen
- Advanced search functionality
- Multiple filter options:
  - Price range slider
  - Minimum rating filter
  - Vehicle type selection
  - Features filtering
- Real-time search results

### 3. Vehicle Detail Screen
- Image carousel with counter
- Comprehensive vehicle specifications
- Owner profile with rating and response time
- Amenities and features list
- Customer reviews section
- Cost breakdown and booking section

### 4. Booking Flow
- **Step 1**: Date and time selection
- **Step 2**: Insurance options and add-ons
- **Step 3**: Payment method selection
- Cost summary at each step

### 5. Booking Confirmation
- Confirmation number and QR code
- Booking summary
- Cost breakdown
- Owner contact information
- Important reminders
- Share booking option

### 6. Profile Screen
- User profile information
- Trip statistics
- Account settings menu
- Logout functionality

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```
API_BASE_URL=http://your-api-endpoint.com
PAYMENT_KEY=your_payment_key
MAP_API_KEY=your_map_api_key
```

### Dark Mode Support
The app includes a design system optimized for light mode. Dark mode can be implemented by extending the color constants.

## 🧪 Testing

```bash
# Run linter
npm run lint

# Run tests (when configured)
npm run test
```

## 📦 Building for Production

### iOS Build
```bash
expo build:ios
```

### Android Build
```bash
expo build:android
```

### Web Build
```bash
expo build:web
```

## 🤝 Component Usage Examples

### Button Component
```jsx
import { Button } from './app/components';

<Button
  title="Book Now"
  variant="primary"
  size="large"
  onPress={() => handleBooking()}
/>
```

### Vehicle Card Component
```jsx
import { VehicleCard } from './app/components';

<VehicleCard
  vehicle={vehicleData}
  onPress={() => navigateToDetail(vehicleData)}
/>
```

### Search Bar Component
```jsx
import { SearchBar } from './app/components';

<SearchBar
  placeholder="Search vehicles..."
  onChangeText={setSearchQuery}
/>
```

## 🎯 Design Principles

1. **User-Centric Design** - Focus on tourist needs and local owner requirements
2. **Trust & Transparency** - Clear information on pricing, vehicle condition, and owner details
3. **Frictionless Booking** - Simple, intuitive booking process
4. **Mobile-First** - Optimized for mobile devices (390×844px baseline)
5. **Accessibility** - Clear typography, sufficient contrast, readable text
6. **Local Feel** - Celebrates Sri Lankan culture and local payment methods

## 📸 Screenshots

Coming soon - screenshots of all major screens

## 🐛 Known Issues & Future Enhancements

- [ ] Real map integration (Google Maps/Mapbox)
- [ ] Live chat functionality
- [ ] Payment gateway integration
- [ ] Real authentication system
- [ ] Push notifications
- [ ] Vehicle listing management for owners
- [ ] Multi-language support
- [ ] Ratings and review system enhancement
- [ ] Trip tracking with GPS
- [ ] Insurance claim management

## 📄 License

This project is licensed under the MIT License.

## 👥 Team

- **UI/UX Design**: Mobile-first design system
- **Development**: React Native with Expo
- **Design System**: Modern, scalable component library

## 📞 Support

For issues, questions, or contributions, please contact the development team or open an issue in the repository.

## 🙏 Acknowledgments

- React Native community
- Expo platform
- React Navigation library
- All contributors and testers

---

**Version**: 1.0.0  
**Last Updated**: November 2024  
**Status**: Active Development
