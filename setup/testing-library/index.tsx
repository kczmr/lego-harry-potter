import React, { PropsWithChildren } from 'react';
import {
  render,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import ThemeWrapper from 'theme/ThemeWrapper';

export const WithProviders = ({ children }: PropsWithChildren<unknown>) => (
  <ThemeWrapper>{children}</ThemeWrapper>
);

const customRender = (
  ui: React.ReactElement<unknown>,
  options?: RenderOptions
): RenderAPI => render(ui, { wrapper: WithProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
