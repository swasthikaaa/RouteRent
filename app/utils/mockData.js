// Mock data for vehicles - replace with real API calls
export const mockVehicles = [
  {
    id: 1,
    name: 'Honda CRV 2022',
    image: 'https://via.placeholder.com/300x200?text=Honda+CRV',
    rating: 4.8,
    reviews: 124,
    pricePerDay: 3500,
    passengers: 5,
    luggage: 3,
    transmission: 'Automatic',
    location: 'Colombo',
    fuelType: 'Petrol',
    mileage: 45000,
  },
  {
    id: 2,
    name: 'Toyota Aqua',
    image: 'https://via.placeholder.com/300x200?text=Toyota+Aqua',
    rating: 4.6,
    reviews: 89,
    pricePerDay: 2500,
    passengers: 5,
    luggage: 2,
    transmission: 'Automatic',
    location: 'Colombo Airport',
    fuelType: 'Hybrid',
    mileage: 32000,
  },
];

// Mock bookings
export const mockBookings = [
  {
    id: 1,
    vehicleId: 1,
    vehicleName: 'Honda CRV 2022',
    pickupDate: '15 Nov 2024',
    returnDate: '18 Nov 2024',
    totalPrice: 12980,
    status: 'confirmed',
    confirmationNumber: 'RR-2024-789456',
  },
];

// Mock user data
export const mockUser = {
  id: 'user_123',
  name: 'Aisha Siddiqui',
  email: 'aisha@example.com',
  phone: '+94 70 123 4567',
  avatar: 'AS',
  rating: 4.9,
  reviews: 12,
  totalTrips: 12,
  memberSince: 'March 2023',
  memberDays: 450,
};
