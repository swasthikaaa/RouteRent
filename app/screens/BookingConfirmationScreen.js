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

export const BookingConfirmationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Success Icon */}
        <View style={styles.successIcon}>
          <Text style={styles.successEmoji}>✅</Text>
        </View>

        {/* Success Message */}
        <Text style={styles.successTitle}>Booking Confirmed!</Text>
        <Text style={styles.successMessage}>
          Your vehicle rental is confirmed and ready for pickup.
        </Text>

        {/* Confirmation Number */}
        <View style={styles.confirmationBox}>
          <Text style={styles.confirmationLabel}>Confirmation Number</Text>
          <Text style={styles.confirmationNumber}>RR-2024-789456</Text>
        </View>

        {/* QR Code Placeholder */}
        <View style={styles.qrBox}>
          <Text style={styles.qrText}>📱 QR Code for Pickup</Text>
        </View>

        {/* Vehicle Summary */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>Vehicle Details</Text>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryItemTitle}>Honda CRV 2022</Text>
            <Text style={styles.summaryItemSubtitle}>License Plate: WP-2024-1234</Text>
          </View>
        </View>

        {/* Booking Details */}
        <View style={styles.detailsSection}>
          <Text style={styles.detailsTitle}>Booking Details</Text>
          
          <View style={styles.detailRow}>
            <View>
              <Text style={styles.detailLabel}>Pickup</Text>
              <Text style={styles.detailValue}>15 Nov, 2024</Text>
              <Text style={styles.detailValue}>10:00 AM</Text>
              <Text style={styles.detailLocation}>Terminal 1, Ground Floor</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View>
              <Text style={styles.detailLabel}>Return</Text>
              <Text style={styles.detailValue}>18 Nov, 2024</Text>
              <Text style={styles.detailValue}>5:00 PM</Text>
              <Text style={styles.detailLocation}>Terminal 1, Ground Floor</Text>
            </View>
          </View>

          <View style={styles.detailRow}>
            <View>
              <Text style={styles.detailLabel}>Duration</Text>
              <Text style={styles.detailValue}>3 days, 7 hours</Text>
            </View>
          </View>
        </View>

        {/* Cost Breakdown */}
        <View style={styles.costSection}>
          <Text style={styles.costTitle}>Cost Breakdown</Text>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Vehicle (3 days × ₨3,500)</Text>
            <Text style={styles.costValue}>₨10,500</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Insurance (Basic)</Text>
            <Text style={styles.costValue}>₨500</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Child Seat</Text>
            <Text style={styles.costValue}>₨800</Text>
          </View>
          <View style={styles.costRow}>
            <Text style={styles.costLabel}>Tax (10%)</Text>
            <Text style={styles.costValue}>₨1,180</Text>
          </View>
          <View style={styles.costDivider} />
          <View style={styles.costRow}>
            <Text style={styles.costLabelTotal}>Total Amount</Text>
            <Text style={styles.costValueTotal}>₨12,980</Text>
          </View>
        </View>

        {/* Owner Contact */}
        <View style={styles.ownerSection}>
          <Text style={styles.ownerTitle}>Your Vehicle Owner</Text>
          <View style={styles.ownerCard}>
            <View style={styles.ownerAvatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>
            <View style={styles.ownerInfo}>
              <Text style={styles.ownerName}>John Dissanayake</Text>
              <Text style={styles.ownerStat}>⭐ 4.8 (24 trips)</Text>
              <Text style={styles.responseTime}>Responds in 2 hours</Text>
            </View>
          </View>
          <View style={styles.contactButtons}>
            <Button
              title="📞 Call"
              variant="secondary"
              size="small"
              onPress={() => {}}
              style={{ flex: 1, marginRight: SPACING.md }}
            />
            <Button
              title="💬 Message"
              variant="secondary"
              size="small"
              onPress={() => {}}
              style={{ flex: 1 }}
            />
          </View>
        </View>

        {/* Important Notes */}
        <View style={styles.notesSection}>
          <Text style={styles.notesTitle}>Important Reminders</Text>
          <View style={styles.noteItem}>
            <Text style={styles.noteBullet}>•</Text>
            <Text style={styles.noteText}>
              Bring a valid passport/ID and international driving permit
            </Text>
          </View>
          <View style={styles.noteItem}>
            <Text style={styles.noteBullet}>•</Text>
            <Text style={styles.noteText}>
              The vehicle will be inspected before pickup
            </Text>
          </View>
          <View style={styles.noteItem}>
            <Text style={styles.noteBullet}>•</Text>
            <Text style={styles.noteText}>
              Free cancellation up to 24 hours before pickup
            </Text>
          </View>
          <View style={styles.noteItem}>
            <Text style={styles.noteBullet}>•</Text>
            <Text style={styles.noteText}>
              Contact support for any changes or issues
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.bottomActions}>
        <Button
          title="📤 Share Booking"
          variant="secondary"
          onPress={() => {}}
          style={{ marginBottom: SPACING.md }}
        />
        <Button
          title="🏠 Back to Home"
          variant="primary"
          onPress={() => navigation.navigate('Home')}
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
  scrollContent: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },
  successIcon: {
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  successEmoji: {
    fontSize: 60,
  },
  successTitle: {
    ...FONTS.h1,
    color: COLORS.darkText,
    textAlign: 'center',
    marginBottom: SPACING.md,
  },
  successMessage: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  confirmationBox: {
    backgroundColor: COLORS.success,
    borderRadius: 12,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.lg,
    alignItems: 'center',
  },
  confirmationLabel: {
    ...FONTS.caption,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: SPACING.sm,
  },
  confirmationNumber: {
    ...FONTS.h2,
    color: COLORS.white,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  qrBox: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingVertical: SPACING.xxl,
    marginBottom: SPACING.lg,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  qrText: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  summarySection: {
    marginBottom: SPACING.lg,
  },
  summaryTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  summaryCard: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
  },
  summaryItemTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.xs,
  },
  summaryItemSubtitle: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  detailsSection: {
    marginBottom: SPACING.lg,
  },
  detailsTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  detailRow: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    marginBottom: SPACING.md,
  },
  detailLabel: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginBottom: SPACING.sm,
    fontWeight: '600',
  },
  detailValue: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
    marginBottom: SPACING.xs,
  },
  detailLocation: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginTop: SPACING.sm,
  },
  costSection: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    padding: SPACING.base,
    marginBottom: SPACING.lg,
  },
  costTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
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
  costDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: SPACING.md,
  },
  costLabelTotal: {
    ...FONTS.h3,
    color: COLORS.darkText,
    fontWeight: 'bold',
  },
  costValueTotal: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  ownerSection: {
    marginBottom: SPACING.lg,
  },
  ownerTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  ownerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    padding: SPACING.base,
    marginBottom: SPACING.md,
  },
  ownerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  avatarText: {
    color: COLORS.white,
    ...FONTS.h3,
    fontWeight: 'bold',
  },
  ownerInfo: {
    flex: 1,
  },
  ownerName: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  ownerStat: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  responseTime: {
    ...FONTS.caption,
    color: COLORS.success,
    marginTop: SPACING.xs,
  },
  contactButtons: {
    flexDirection: 'row',
    gap: SPACING.md,
  },
  notesSection: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 12,
    padding: SPACING.base,
    marginBottom: SPACING.lg,
  },
  notesTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  noteItem: {
    flexDirection: 'row',
    marginBottom: SPACING.md,
  },
  noteBullet: {
    ...FONTS.body,
    color: COLORS.primary,
    marginRight: SPACING.md,
    fontWeight: 'bold',
  },
  noteText: {
    ...FONTS.body,
    color: COLORS.darkText,
    flex: 1,
    lineHeight: 22,
  },
  bottomActions: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});

export default BookingConfirmationScreen;
