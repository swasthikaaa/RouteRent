import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { SearchBar, FilterChips, VehicleCard, Button } from '../components';

const VEHICLES = [
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
  },
  {
    id: 3,
    name: 'Suzuki Vitara',
    image: 'https://via.placeholder.com/300x200?text=Suzuki+Vitara',
    rating: 4.9,
    reviews: 156,
    pricePerDay: 4200,
    passengers: 5,
    luggage: 3,
    transmission: 'Manual',
    location: 'Kandy',
  },
];

const FILTER_CHIPS = [
  { id: 'all', label: 'All Vehicles' },
  { id: 'suv', label: 'SUV' },
  { id: 'car', label: 'Car' },
  { id: 'bike', label: 'Bike' },
  { id: 'van', label: 'Van' },
];

export const HomeScreen = ({ navigation }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleVehiclePress = (vehicle) => {
    navigation.navigate('VehicleDetail', { vehicle });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hello, Tourist! 👋</Text>
          <Text style={styles.subGreeting}>Colombo, Sri Lanka 📍</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchSection}>
          <SearchBar
            placeholder="Search vehicles..."
            onPress={() => navigation.navigate('Search')}
          />
        </View>

        {/* Filter Chips */}
        <Text style={styles.sectionTitle}>Filter by Type</Text>
        <FilterChips
          data={FILTER_CHIPS}
          selectedId={selectedFilter}
          onSelect={setSelectedFilter}
        />

        {/* Map Section Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapText}>🗺️ Map View Coming Soon</Text>
        </View>

        {/* Featured Vehicles */}
        <Text style={[styles.sectionTitle, { marginTop: SPACING.lg }]}>
          Featured Vehicles
        </Text>
        <View style={styles.vehiclesSection}>
          {VEHICLES.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onPress={() => handleVehiclePress(vehicle)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: SPACING.xxl,
  },
  header: {
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    paddingBottom: SPACING.lg,
  },
  greeting: {
    ...FONTS.h2,
    color: COLORS.darkText,
    marginBottom: SPACING.xs,
  },
  subGreeting: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  searchSection: {
    paddingHorizontal: SPACING.base,
    marginBottom: SPACING.base,
  },
  sectionTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    paddingHorizontal: SPACING.base,
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },
  mapPlaceholder: {
    marginHorizontal: SPACING.base,
    height: 200,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  mapText: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  vehiclesSection: {
    paddingHorizontal: SPACING.base,
  },
});

export default HomeScreen;
