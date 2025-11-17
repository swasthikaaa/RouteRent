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
import { Button, Divider } from '../components';

export const BookingScreen = ({ route, navigation }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    pickupDate: '15 Nov 2024',
    pickupTime: '10:00 AM',
    returnDate: '18 Nov 2024',
    returnTime: '5:00 PM',
    insurance: 'basic',
    extras: [],
    paymentMethod: 'card',
  });

  const renderStepIndicator = () => (
    <View style={styles.stepIndicator}>
      {[1, 2, 3].map((s) => (
        <View key={s} style={styles.stepContainer}>
          <View
            style={[
              styles.stepCircle,
              s <= step && styles.stepCircleActive,
            ]}
          >
            <Text
              style={[
                styles.stepText,
                s <= step && styles.stepTextActive,
              ]}
            >
              {s}
            </Text>
          </View>
          <Text
            style={[
              styles.stepLabel,
              s <= step && styles.stepLabelActive,
            ]}
          >
            {s === 1 ? 'Dates' : s === 2 ? 'Add-ons' : 'Payment'}
          </Text>
        </View>
      ))}
    </View>
  );

  const renderStep1 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Select Dates & Time</Text>
      
      <View style={styles.dateTimeSection}>
        <Text style={styles.sectionLabel}>Pickup</Text>
        <TouchableOpacity style={styles.dateInput}>
          <Text style={styles.dateInputText}>📅 {bookingData.pickupDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInput}>
          <Text style={styles.dateInputText}>🕐 {bookingData.pickupTime}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dateTimeSection}>
        <Text style={styles.sectionLabel}>Return</Text>
        <TouchableOpacity style={styles.dateInput}>
          <Text style={styles.dateInputText}>📅 {bookingData.returnDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateInput}>
          <Text style={styles.dateInputText}>🕐 {bookingData.returnTime}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tripDuration}>
        <Text style={styles.durationLabel}>Trip Duration</Text>
        <Text style={styles.durationValue}>3 days, 7 hours</Text>
      </View>

      <View style={styles.costPreview}>
        <Text style={styles.costLabel}>Estimated Cost</Text>
        <Text style={styles.costAmount}>₨10,500</Text>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Insurance & Extras</Text>

      <View style={styles.optionsSection}>
        <Text style={styles.optionsTitle}>Insurance Options</Text>
        {[
          { id: 'basic', label: 'Basic Coverage', price: 500, desc: 'Up to ₨50,000' },
          { id: 'premium', label: 'Premium Coverage', price: 1200, desc: 'Up to ₨150,000' },
          { id: 'none', label: 'No Insurance', price: 0, desc: 'Not recommended' },
        ].map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionCard,
              bookingData.insurance === option.id && styles.optionCardActive,
            ]}
            onPress={() => setBookingData({ ...bookingData, insurance: option.id })}
          >
            <View style={styles.optionRadio}>
              {bookingData.insurance === option.id && (
                <View style={styles.optionRadioInner} />
              )}
            </View>
            <View style={styles.optionContent}>
              <Text style={styles.optionLabel}>{option.label}</Text>
              <Text style={styles.optionDesc}>{option.desc}</Text>
            </View>
            <Text style={styles.optionPrice}>₨{option.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.optionsSection}>
        <Text style={styles.optionsTitle}>Optional Extras</Text>
        {[
          { id: 'child-seat', label: 'Child Seat', price: 800 },
          { id: 'gps', label: 'GPS Navigation', price: 300 },
          { id: 'charger', label: 'Phone Charger', price: 100 },
          { id: 'driver', label: 'Extra Driver', price: 1000 },
        ].map((extra) => (
          <TouchableOpacity
            key={extra.id}
            style={styles.extraCard}
            onPress={() => {
              const isSelected = bookingData.extras.includes(extra.id);
              setBookingData({
                ...bookingData,
                extras: isSelected
                  ? bookingData.extras.filter((e) => e !== extra.id)
                  : [...bookingData.extras, extra.id],
              });
            }}
          >
            <View style={styles.extraCheckbox}>
              {bookingData.extras.includes(extra.id) && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
            <View style={styles.extraContent}>
              <Text style={styles.extraLabel}>{extra.label}</Text>
            </View>
            <Text style={styles.extraPrice}>+₨{extra.price}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.costSummary}>
        <View style={styles.costRow}>
          <Text>Vehicle (3 days)</Text>
          <Text>₨10,500</Text>
        </View>
        <View style={styles.costRow}>
          <Text>Insurance</Text>
          <Text>₨500</Text>
        </View>
        <View style={styles.costRow}>
          <Text>Extras</Text>
          <Text>₨800</Text>
        </View>
        <Divider />
        <View style={styles.costRow}>
          <Text style={styles.costTotal}>Total</Text>
          <Text style={styles.costTotalAmount}>₨11,800</Text>
        </View>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContent}>
      <Text style={styles.stepTitle}>Payment Method</Text>

      <View style={styles.paymentOptions}>
        {[
          { id: 'card', label: 'Credit/Debit Card', icon: '💳' },
          { id: 'mobile', label: 'Mobile Payment', icon: '📱' },
          { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
        ].map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.paymentCard,
              bookingData.paymentMethod === method.id && styles.paymentCardActive,
            ]}
            onPress={() =>
              setBookingData({ ...bookingData, paymentMethod: method.id })
            }
          >
            <Text style={styles.paymentIcon}>{method.icon}</Text>
            <Text style={styles.paymentLabel}>{method.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.termsSection}>
        <Text style={styles.termsText}>
          By clicking "Complete Booking", you agree to our Terms & Conditions
        </Text>
      </View>

      <View style={styles.finalCost}>
        <Text style={styles.finalCostLabel}>Total Amount</Text>
        <Text style={styles.finalCostAmount}>₨12,980</Text>
      </View>
    </View>
  );

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      navigation.navigate('BookingConfirmation');
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderStepIndicator()}

        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </ScrollView>

      <View style={styles.bottomActions}>
        {step > 1 && (
          <Button
            title="Back"
            variant="secondary"
            onPress={handlePrevious}
            style={{ flex: 1, marginRight: SPACING.md }}
          />
        )}
        <Button
          title={step === 3 ? 'Complete Booking' : 'Continue'}
          variant="primary"
          onPress={handleNext}
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
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.backgroundLight,
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
  },
  stepCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  stepCircleActive: {
    backgroundColor: COLORS.primary,
  },
  stepText: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    fontWeight: '600',
  },
  stepTextActive: {
    color: COLORS.white,
  },
  stepLabel: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  stepLabelActive: {
    color: COLORS.primary,
    fontWeight: '600',
  },
  stepContent: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },
  stepTitle: {
    ...FONTS.h2,
    color: COLORS.darkText,
    marginBottom: SPACING.lg,
  },
  dateTimeSection: {
    marginBottom: SPACING.lg,
  },
  sectionLabel: {
    ...FONTS.body,
    color: COLORS.textSecondary,
    marginBottom: SPACING.md,
    fontWeight: '600',
  },
  dateInput: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.md,
  },
  dateInputText: {
    ...FONTS.body,
    color: COLORS.darkText,
  },
  tripDuration: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
    marginBottom: SPACING.lg,
  },
  durationLabel: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
  },
  durationValue: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginTop: SPACING.xs,
  },
  costPreview: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base,
  },
  costLabel: {
    ...FONTS.caption,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  costAmount: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  optionsSection: {
    marginBottom: SPACING.lg,
  },
  optionsTitle: {
    ...FONTS.h3,
    color: COLORS.darkText,
    marginBottom: SPACING.md,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: SPACING.base,
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  optionCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(255, 107, 53, 0.05)',
  },
  optionRadio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  optionRadioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
  },
  optionContent: {
    flex: 1,
  },
  optionLabel: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  optionDesc: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  optionPrice: {
    ...FONTS.h3,
    color: COLORS.primary,
    marginLeft: SPACING.base,
  },
  extraCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: SPACING.base,
    marginBottom: SPACING.md,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  extraCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
    backgroundColor: COLORS.white,
  },
  checkmark: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  extraContent: {
    flex: 1,
  },
  extraLabel: {
    ...FONTS.body,
    color: COLORS.darkText,
    fontWeight: '600',
  },
  extraPrice: {
    ...FONTS.body,
    color: COLORS.primary,
    marginLeft: SPACING.base,
  },
  costSummary: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: SPACING.base,
    marginTop: SPACING.lg,
  },
  costRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: SPACING.md,
  },
  costTotal: {
    ...FONTS.h3,
    color: COLORS.darkText,
    fontWeight: 'bold',
  },
  costTotalAmount: {
    ...FONTS.h2,
    color: COLORS.primary,
  },
  paymentOptions: {
    flexDirection: 'row',
    gap: SPACING.base,
    marginBottom: SPACING.lg,
  },
  paymentCard: {
    flex: 1,
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: SPACING.base,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  paymentCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: 'rgba(255, 107, 53, 0.05)',
  },
  paymentIcon: {
    fontSize: 32,
    marginBottom: SPACING.sm,
  },
  paymentLabel: {
    ...FONTS.caption,
    color: COLORS.darkText,
    textAlign: 'center',
  },
  termsSection: {
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    padding: SPACING.base,
    marginBottom: SPACING.lg,
  },
  termsText: {
    ...FONTS.caption,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  finalCost: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: SPACING.base,
    marginBottom: SPACING.lg,
  },
  finalCostLabel: {
    ...FONTS.caption,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: SPACING.sm,
  },
  finalCostAmount: {
    ...FONTS.h1,
    color: COLORS.white,
  },
  bottomActions: {
    flexDirection: 'row',
    gap: SPACING.base,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.base,
    backgroundColor: COLORS.white,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
});

export default BookingScreen;
