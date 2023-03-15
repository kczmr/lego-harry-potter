import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from 'setup/Navigation';
import ThemeWrapper from 'theme/ThemeWrapper';

const App: React.FC = () => (
  <ThemeWrapper>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  </ThemeWrapper>
);

export default App;
