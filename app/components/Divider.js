import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../constants';

export const Divider = ({ style, color = COLORS.border, height = 1 }) => {
  return (
    <View
      style={[
        styles.divider,
        { borderBottomColor: color, borderBottomWidth: height },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: SPACING.base,
  },
});

export default Divider;
