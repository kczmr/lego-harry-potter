import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'setup/Navigation';
import ThemeWrapper from 'theme/ThemeWrapper';

const App: React.FC = () => (
  <ThemeWrapper>
    <StatusBar style='light' />
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NavigationContainer>
  </ThemeWrapper>
);

export default App;
