import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { Button } from '../components';

export const BookingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Bookings</Text>
      </View>

      <View style={styles.emptyState}>
        <Text style={styles.emptyIcon}>📅</Text>
        <Text style={styles.emptyTitle}>No Active Bookings</Text>
        <Text style={styles.emptyMessage}>
          You don't have any active bookings at the moment. Start exploring vehicles to make your first booking.
        </Text>
        <Button
          title="Explore Vehicles"
          variant="primary"
          style={{ marginTop: SPACING.lg }}
          onPress={() => {}}
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
  header: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  headerTitle: {
    ...FONTS.h2,
    color: COLORS.darkText,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
  },
  emptyIcon: {
    fontSize: 60,
    marginBottom: SPACING.lg,
  },
  emptyTitle: {
    ...FONTS.h2,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  emptyMessage: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default BookingsScreen;
