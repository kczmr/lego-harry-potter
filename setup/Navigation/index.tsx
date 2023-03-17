import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import Box from 'components/Box';
import ChooseMinifigScreen from 'screens/ChooseMinifigScreen';
import WebViewScreen from 'screens/WebViewScreen';
import OrderMinifigScreen from 'screens/OrderMinifigScreen';
import { NavigationStackParamList } from './types';

const { Navigator, Screen } = createStackNavigator<NavigationStackParamList>();

const Navigation: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        header: () => <Box pt={top} />,
        cardStyle: { backgroundColor: colors.purple },
      }}
    >
      <Screen name='ChooseMinifigScreen' component={ChooseMinifigScreen} />
      <Screen name='WebViewScreen' component={WebViewScreen} />
      <Screen name='OrderMinifigScreen' component={OrderMinifigScreen} />
    </Navigator>
  );
};

export default Navigation;
