import { Platform } from 'react-native';

export const FONTS = {
  // Heading Styles
  h1: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Bold' : 'Poppins-Bold',
  },
  h2: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 29,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  },
  h3: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  },

  // Body Styles
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Inter-Regular' : 'Inter-Regular',
  },
  body: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    fontFamily: Platform.OS === 'ios' ? 'Inter-Regular' : 'Inter-Regular',
  },
  bodySmall: {
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: Platform.OS === 'ios' ? 'Inter-Regular' : 'Inter-Regular',
  },

  // Caption Styles
  caption: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: Platform.OS === 'ios' ? 'Inter-Regular' : 'Inter-Regular',
  },

  // Button Styles
  button: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    fontFamily: Platform.OS === 'ios' ? 'Poppins-SemiBold' : 'Poppins-SemiBold',
  },
};

export default FONTS;
