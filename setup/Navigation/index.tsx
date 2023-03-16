import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChooseMinifigScreen from 'screens/ChooseMinifigScreen';
import { MainStackParamList } from './types';

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

const Navigation: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='ChooseMinifigScreen' component={ChooseMinifigScreen} />
  </Navigator>
);

export default Navigation;
