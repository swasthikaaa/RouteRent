import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { Button, Divider } from '../components';

export const VehicleDetailScreen = ({ route, navigation }) => {
  const { vehicle } = route.params;

  const renderImageCarousel = () => (
    <View style={styles.carouselContainer}>
      <Image source={{ uri: vehicle.image }} style={styles.carouselImage} />
      <Text style={styles.carouselCounter}>1/5</Text>
    </View>
  );

  const renderOwnerCard = () => (
    <View style={styles.ownerCard}>
      <View style={styles.ownerInfo}>
        <View style={styles.ownerAvatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <View style={styles.ownerDetails}>
          <Text style={styles.ownerName}>John Dissanayake</Text>
          <View style={styles.ownerMeta}>
            <Text style={styles.ownerStat}>⭐ 4.8 (24 trips)</Text>
            <Text style={styles.ownerStat}>✓ Verified</Text>
          </View>
          <Text style={styles.responseTime}>Responds in 2 hours</Text>
        </View>
      </View>
      <Button
        title="Message"
        variant="secondary"
        size="small"
        onPress={() => {}}
      />
    </View>
  );

  const renderDetails = () => (
    <View style={styles.detailsSection}>
      <Text style={styles.detailsTitle}>Vehicle Details</Text>
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Passengers</Text>
        <Text style={styles.detailValue}>{vehicle.passengers} seats</Text>
      </View>
      <Divider />
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Luggage</Text>
        <Text style={styles.detailValue}>{vehicle.luggage} bags</Text>
      </View>
      <Divider />
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Transmission</Text>
        <Text style={styles.detailValue}>{vehicle.transmission}</Text>
      </View>
      <Divider />
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Fuel Type</Text>
        <Text style={styles.detailValue}>Petrol</Text>
      </View>
      <Divider />
      <View style={styles.detailRow}>
        <Text style={styles.detailLabel}>Mileage</Text>
        <Text style={styles.detailValue}>45,000 km</Text>
      </View>
    </View>
  );

  const renderAmenities = () => (
    <View style={styles.amenitiesSection}>
      <Text style={styles.amenitiesTitle}>Amenities</Text>
      <View style={styles.amenitiesGrid}>
        {['AC', 'Power Windows', 'Bluetooth', 'USB Charger', 'WiFi', 'Phone Mount'].map(
          (amenity, index) => (
            <View key={index} style={styles.amenityBadge}>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          )
        )}
      </View>
    </View>
  );

  const renderReviews = () => (
    <View style={styles.reviewsSection}>
      <View style={styles.reviewsHeader}>
        <Text style={styles.reviewsTitle}>Reviews</Text>
        <Text style={styles.viewAllLink}>View All →</Text>
      </View>
      <View style={styles.reviewCard}>
        <View style={styles.reviewerInfo}>
          <View style={styles.reviewerAvatar}>
            <Text style={styles.avatarText}>AB</Text>
          </View>
          <View>
            <Text style={styles.reviewerName}>Alex Brown</Text>
            <Text style={styles.reviewDate}>3 days ago</Text>
          </View>
          <Text style={styles.reviewRating}>⭐ 5.0</Text>
        </View>
        <Text style={styles.reviewText}>
          Amazing experience! Clean car, great condition, and very responsive owner. Would definitely book again!
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with Back Button */}
        <View style={styles.headerTop}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.favoriteButton}>
            <Text style={styles.favoriteButtonText}>♡</Text>
          </TouchableOpacity>
        </View>

        {/* Image Carousel */}
        {renderImageCarousel()}

        {/* Vehicle Info */}
        <View style={styles.vehicleInfo}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.vehicleTitle}>{vehicle.name}</Text>
              <Text style={styles.vehicleLocation}>
                📍 {vehicle.location}
              </Text>
            </View>
          </View>

          <View style={styles.ratingRow}>
            <Text style={styles.rating}>
              ⭐ {vehicle.rating}
              <Text style={styles.reviewCount}>
                {' '}({vehicle.reviews} reviews)
              </Text>
            </Text>
          </View>

          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Price per day</Text>
            <Text style={styles.price}>₨{vehicle.pricePerDay}</Text>
          </View>
        </View>

        {/* Owner Card */}
        {renderOwnerCard()}

        {/* Divider */}
        <Divider style={styles.divider} />

        {/* Vehicle Details */}
        {renderDetails()}

        {/* Amenities */}
        {renderAmenities()}

        {/* Reviews */}
        {renderReviews()}

        {/* Booking Info */}
        <View style={styles.bookingInfo}>
          <Text style={styles.bookingInfoTitle}>Booking Details</Text>
          <View style={styles.dateRange}>
            <View>
              <Text style={styles.dateLabel}>Pickup</Text>
              <Text style={styles.dateValue}>Nov 15, 2024</Text>
              <Text style={styles.timeValue}>10:00 AM</Text>
            </View>
            <View style={styles.arrow}>
              <Text>→</Text>
            </View>
            <View>
              <Text style={styles.dateLabel}>Return</Text>
              <Text style={styles.dateValue}>Nov 18, 2024</Text>
              <Text style={styles.timeValue}>5:00 PM</Text>
            </View>
          </View>
          <Text style={styles.duration}>3 days, 7 hours</Text>
        </View>

        {/* Cost Summary */}
        <View style={styles.costSummary}>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Vehicle: 3 days × ₨{vehicle.pricePerDay}</Text>
            <Text style={styles.costValue}>₨{vehicle.pricePerDay * 3}</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Insurance</Text>
            <Text style={styles.costValue}>₨500</Text>
          </View>
          <Divider />
          <View style={styles.costRow}>
            <Text style={styles.costLabelTotal}>Total Estimated Cost</Text>
            <Text style={styles.costValueTotal}>₨{(vehicle.pricePerDay * 3) + 500}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Booking Button */}
      <View style={styles.bottomButton}>
        <Button
          title="Book Now"
          variant="primary"
          onPress={() => navigation.navigate('Booking')}
          style={{ flex: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    paddingTop: SPACING.base,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
  },
  backButtonText: {
    fontSize: 24,
    color: COLORS.primary,
  },
  favoriteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.backgroundLight,
  },
  favoriteButtonText: {
    fontSize: 24,
  },
  carouselContainer: {
    position: 'relative',
    height: 250,
    backgroundColor: COLORS.backgroundLight,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  carouselCounter: {
    position: 'absolute',
    bottom: SPACING.base,
    right: SPACING.base,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: COLORS.white,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 4,
    ...FONTS.caption,
  },
  vehicleInfo: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  titleRow: {
    marginBottom: SPACING.md,
  },
  vehicleTitle: {
    ...FONTS.h2,
    color: COLORS.darkText,
  },
  vehicleLocation: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  ratingRow: {
    marginBottom: SPACING.lg,
  },
  rating: {
    ...FONTS.h3,
    color: COLORS.darkText,
  },
  reviewCount: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  priceRow: {
    backgroundColor: COLORS.backgroundLight,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  price: {
    ...FONTS.h1,
    color: COLORS.primary,
  },
  ownerCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: SPACING.base,
    borderRadius: 12,
    marginVertical: SPACING.lg,
  },
  ownerInfo: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: SPACING.md,
  },
  ownerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: 'bold',
  },
  ownerDetails: {
    flex: 1,
  },
  ownerName: {
    ...FONTS.h3,
    color: COLORS.darkText,
  },
  ownerMeta: {
    flexDirection: 'row',
    gap: SPACING.md,
    marginTop: SPACING.xs,
  },
  ownerStat: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  responseTime: {
    ...FONTS.caption,
    color: COLORS.success,
    marginTop: SPACING.xs,
  },
  divider: {
    marginHorizontal: SPACING.base,
  },
  detailsSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  detailsTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
  },
  detailLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  detailValue: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  amenitiesSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  amenitiesTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  amenitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.md,
  },
  amenityBadge: {
    backgroundColor: COLORS.backgroundLight,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    borderRadius: 8,
    width: '48%',
  },
  amenityText: {
    ...FONTS.body,
    color: COLORS.darkText,
    textAlign: 'center',
  },
  reviewsSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  reviewsTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
  },
  viewAllLink: {
    ...FONTS.body,
    color: COLORS.primary,
  },
  reviewCard: {
    backgroundColor: COLORS.backgroundLight,
    padding: SPACING.base,
    borderRadius: 8,
  },
  reviewerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.md,
  },
  reviewerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reviewerName: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  reviewDate: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  reviewRating: {
    marginLeft: 'auto',
    ...FONTS.body,
  },
  reviewText: {
    ...FONTS.body,
    color: COLORS.darkText,
    lineHeight: 22,
  },
  bookingInfo: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
    marginHorizontal: SPACING.base,
    borderRadius: 12,
    marginVertical: SPACING.lg,
  },
  bookingInfoTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  dateRange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
    gap: SPACING.base,
  },
  dateLabel: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  dateValue: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
    marginTop: SPACING.xs,
  },
  timeValue: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  arrow: {
    fontSize: 20,
    color: COLORS.primary,
    marginHorizontal: SPACING.md,
  },
  duration: {
    ...FONTS.body,
    color: COLORS.primary,
    fontWeight: '600',
  },
  costSummary: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.xxl,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING.md,
  },
  costLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  costValue: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  costLabelTotal: {
    ...FONTS.h3,
    color: COLORS.darkText,
  },
  costValueTotal: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  bottomButton: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});

export default VehicleDetailScreen;
