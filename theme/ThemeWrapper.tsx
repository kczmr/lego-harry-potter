import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from '.';

const ThemeWrapper: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider {...{ theme, children }} />
);

export default ThemeWrapper;
