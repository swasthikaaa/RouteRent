import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';

export const FilterChips = ({ data, onSelect, selectedId }) => {
  const renderChip = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.chip,
        selectedId === item.id && styles.chipActive,
      ]}
      onPress={() => onSelect(item.id)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.chipText,
          selectedId === item.id && styles.chipTextActive,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderChip}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
      scrollEnabled={data.length > 3}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    gap: SPACING.md,
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.md,
  },
  chip: {
    paddingHorizontal: SPACING.base,
    paddingVertical: SPACING.sm,
    borderRadius: 20,
    backgroundColor: COLORS.backgroundLight,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipText: {
    ...FONTS.body,
    color: COLORS.textSecondary,
  },
  chipTextActive: {
    color: COLORS.white,
  },
});

export default FilterChips;
