import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';
import { Button } from '../components';

export const ProfileScreen = ({ navigation }) => {
  const menuItems = [
    { id: 'bookings', label: 'My Bookings', icon: '📅' },
    { id: 'saved', label: 'Saved Vehicles', icon: '❤️' },
    { id: 'payments', label: 'Payment Methods', icon: '💳' },
    { id: 'referral', label: 'Referral Program', icon: '🎁' },
    { id: 'owner', label: 'Become an Owner', icon: '🏠' },
    { id: 'support', label: 'Support & Help', icon: '❓' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'about', label: 'About & Feedback', icon: 'ℹ️' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>AS</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Aisha Siddiqui</Text>
            <Text style={styles.memberSince}>Member since March 2023</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>⭐ 4.9</Text>
              <Text style={styles.reviews}>(12 reviews)</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Total Trips</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>4.9</Text>
            <Text style={styles.statLabel}>Avg Rating</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>450</Text>
            <Text style={styles.statLabel}>Member Days</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuSection}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              onPress={() => {}}
              activeOpacity={0.7}
            >
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={styles.logoutSection}>
          <Button
            title="🚪 Logout"
            variant="secondary"
            onPress={() => {}}
          />
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
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
    gap: SPACING.lg,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: COLORS.white,
    ...FONTS.h2,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.xs,
  },
  memberSince: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.sm,
  },
  rating: {
    ...FONTS.body,
    color: COLORS.accent,
    fontWeight: '600',
  },
  reviews: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  editButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 18,
  },
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    gap: SPACING.md,
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingVertical: SPACING.lg,
    alignItems: 'center',
  },
  statValue: {
    ...FONTS.h2,
    color: COLORS.primary,
    marginBottom: SPACING.xs,
  },
  statLabel: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  menuSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    marginBottom: SPACING.md,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: SPACING.lg,
  },
  menuLabel: {
    ...FONTS.body,
    color: COLORS.darkText,
    flex: 1,
    fontWeight: '500',
  },
  menuArrow: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  logoutSection: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
});

export default ProfileScreen;
