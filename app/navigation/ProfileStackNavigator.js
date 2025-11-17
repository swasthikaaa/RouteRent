import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen name="ProfileList" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
