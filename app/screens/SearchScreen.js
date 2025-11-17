import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { Button, SearchBar } from '../components';

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
  {
    id: 4,
    name: 'Tata Nexon',
    image: 'https://via.placeholder.com/300x200?text=Tata+Nexon',
    rating: 4.7,
    reviews: 92,
    pricePerDay: 3800,
    passengers: 5,
    luggage: 3,
    transmission: 'Automatic',
    location: 'Galle',
  },
];

export const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    vehicleType: 'all',
    priceRange: [0, 10000],
    rating: 0,
  });

  const filteredVehicles = VEHICLES.filter((vehicle) => {
    const matchesSearch = vehicle.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      vehicle.pricePerDay >= filters.priceRange[0] &&
      vehicle.pricePerDay <= filters.priceRange[1];
    const matchesRating = vehicle.rating >= filters.rating;

    return matchesSearch && matchesPrice && matchesRating;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <SearchBar
            placeholder="Search vehicles..."
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Filters Section */}
        <View style={styles.filterSection}>
          <Text style={styles.filterTitle}>Filters</Text>

          {/* Price Range */}
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Price Range</Text>
            <View style={styles.priceDisplay}>
              <Text style={styles.priceText}>
                ₨{filters.priceRange[0]} - ₨{filters.priceRange[1]}
              </Text>
            </View>
          </View>

          {/* Rating Filter */}
          <View style={styles.filterItem}>
            <Text style={styles.filterLabel}>Minimum Rating</Text>
            <View style={styles.ratingButtons}>
              {[0, 3, 4, 5].map((rating) => (
                <TouchableOpacity
                  key={rating}
                  style={[
                    styles.ratingButton,
                    filters.rating === rating && styles.ratingButtonActive,
                  ]}
                  onPress={() =>
                    setFilters({ ...filters, rating })
                  }
                >
                  <Text style={styles.ratingButtonText}>
                    {rating === 0 ? 'All' : `${rating}★`}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Button
            title="Apply Filters"
            variant="primary"
            onPress={() => {}}
            style={styles.applyButton}
          />
        </View>

        {/* Results */}
        <View style={styles.resultsSection}>
          <Text style={styles.resultsTitle}>
            {filteredVehicles.length} Results Found
          </Text>
          {filteredVehicles.map((vehicle) => (
            <TouchableOpacity
              key={vehicle.id}
              style={styles.resultCard}
              onPress={() =>
                navigation.navigate('VehicleDetail', { vehicle })
              }
            >
              <View style={styles.resultCardContent}>
                <Text style={styles.resultCardTitle}>{vehicle.name}</Text>
                <Text style={styles.resultCardLocation}>
                  📍 {vehicle.location}
                </Text>
                <Text style={styles.resultCardPrice}>
                  ₨{vehicle.pricePerDay}/day
                </Text>
                <Text style={styles.resultCardRating}>
                  ⭐ {vehicle.rating} ({vehicle.reviews} reviews)
                </Text>
              </View>
            </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingTop: SPACING.base,
    paddingBottom: SPACING.lg,
    gap: SPACING.md,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 24,
    color: COLORS.primary,
  },
  filterSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
    marginBottom: SPACING.lg,
  },
  filterTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  filterItem: {
    marginBottom: SPACING.lg,
  },
  filterLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
  },
  priceDisplay: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderRadius: 8,
  },
  priceText: {
    ...FONTS.h3,
    color: COLORS.primary,
  },
  ratingButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  ratingButton: {
    flex: 1,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ratingButtonActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  ratingButtonText: {
    ...FONTS.body,
    color: COLORS.darkText,
  },
  applyButton: {
    marginTop: SPACING.base,
  },
  resultsSection: {
    paddingHorizontal: SPACING.base,
    paddingBottom: SPACING.xxl,
  },
  resultsTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  resultCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.base,
    marginBottom: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  resultCardContent: {
    gap: SPACING.sm,
  },
  resultCardTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
  },
  resultCardLocation: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  resultCardPrice: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  resultCardRating: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
});

export default SearchScreen;
