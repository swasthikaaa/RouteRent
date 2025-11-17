import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, SPACING } from '../constants';

export const SearchBar = ({ placeholder = 'Search vehicles...', onChangeText, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textLight}
        onChangeText={onChangeText}
        editable={!onPress}
      />
      <View style={styles.icon}>🔍</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 8,
    paddingHorizontal: SPACING.base,
    height: 48,
  },
  input: {
    flex: 1,
    ...FONTS.body,
    color: COLORS.darkText,
  },
  icon: {
    fontSize: 18,
    marginLeft: SPACING.md,
  },
});

export default SearchBar;
