import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import Box from 'components/Box';
import ChooseMinifigScreen from 'screens/ChooseMinifigScreen';
import WebViewScreen from 'screens/WebViewScreen';
import OrderMinifigScreen from 'screens/OrderMinifigScreen';
import OrderMinifigSummaryScreen from 'screens/OrderMinifigSummaryScreen';
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
      initialRouteName='ChooseMinifigScreen'
    >
      <Screen name='ChooseMinifigScreen' component={ChooseMinifigScreen} />
      <Screen name='WebViewScreen' component={WebViewScreen} />
      <Screen name='OrderMinifigScreen' component={OrderMinifigScreen} />
      <Screen
        name='OrderMinifigSummary'
        component={OrderMinifigSummaryScreen}
      />
    </Navigator>
  );
};

export default Navigation;
