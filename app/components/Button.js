import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';

export const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'large',
  disabled = false,
  loading = false,
  style,
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button];
    
    if (size === 'large') {
      baseStyle.push(styles.buttonLarge);
    } else if (size === 'small') {
      baseStyle.push(styles.buttonSmall);
    }

    if (variant === 'primary') {
      baseStyle.push(styles.buttonPrimary);
    } else if (variant === 'secondary') {
      baseStyle.push(styles.buttonSecondary);
    } else if (variant === 'tertiary') {
      baseStyle.push(styles.buttonTertiary);
    }

    if (disabled) {
      baseStyle.push(styles.buttonDisabled);
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={[getButtonStyle(), style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? COLORS.white : COLORS.primary}
          size="small"
        />
      ) : (
        <Text
          style={[
            styles.buttonText,
            variant === 'secondary' && styles.buttonTextSecondary,
            variant === 'tertiary' && styles.buttonTextTertiary,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLarge: {
    height: 48,
    paddingHorizontal: SPACING.base,
  },
  buttonSmall: {
    height: 36,
    paddingHorizontal: SPACING.md,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonSecondary: {
    backgroundColor: COLORS.background,
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  buttonTertiary: {
    backgroundColor: COLORS.transparent,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    ...FONTS.button,
    color: COLORS.white,
  },
  buttonTextSecondary: {
    color: COLORS.secondary,
  },
  buttonTextTertiary: {
    color: COLORS.secondary,
  },
});

export default Button;
