import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';
import ChooseMinifigScreen from 'screens/ChooseMinifigScreen';
import Box from 'components/Box';
import { MainStackParamList } from './types';

const { Navigator, Screen } = createStackNavigator<MainStackParamList>();

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
    </Navigator>
  );
};

export default Navigation;
