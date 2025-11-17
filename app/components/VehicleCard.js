import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';

export const VehicleCard = ({ vehicle, onPress }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Text key={i} style={{ color: i < fullStars ? COLORS.accent : COLORS.border }}>
          ★
        </Text>
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: vehicle.image }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {vehicle.name}
        </Text>
        <View style={styles.ratingRow}>
          <View style={styles.stars}>
            {renderStars(vehicle.rating)}
          </View>
          <Text style={styles.reviewCount}>
            {vehicle.reviews} reviews
          </Text>
        </View>
        <Text style={styles.price}>
          ₨{vehicle.pricePerDay}
          <Text style={styles.priceLabel}>/day</Text>
        </Text>
        <View style={styles.features}>
          <Text style={styles.feature}>👥 {vehicle.passengers}</Text>
          <Text style={styles.feature}>🧳 {vehicle.luggage}</Text>
          <Text style={styles.feature}>⚙️ {vehicle.transmission}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    marginBottom: SPACING.base,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.backgroundLight,
  },
  content: {
    padding: SPACING.base,
  },
  title: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.sm,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  stars: {
    flexDirection: 'row',
    marginRight: SPACING.md,
  },
  reviewCount: {
    ...FONTS.bodySmall,
    color: COLORS.textSecondary,
  },
  price: {
    ...FONTS.h2,
    color: COLORS.primary,
    marginBottom: SPACING.md,
  },
  priceLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  feature: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
});

export default VehicleCard;
