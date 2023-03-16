import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'setup/Navigation';
import ThemeWrapper from 'theme/ThemeWrapper';
import AxiosContextWrapper from 'contexts/AxiosContext/AxiosContextWrapper';

const App: React.FC = () => (
  <ThemeWrapper>
    <StatusBar style='light' />
    <AxiosContextWrapper>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </AxiosContextWrapper>
  </ThemeWrapper>
);

export default App;
