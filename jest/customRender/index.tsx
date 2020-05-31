import * as React from 'react';
import {
  render,
  wait,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import theme from '../__mocks__/themeMock';

const axe = require('../axe-config.js');
import ThemeProvider from '../providers/ThemeProvider';

const Providers: React.FC<any> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const customRender = (
  ui: React.ReactElement<any>,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => render(ui, { wrapper: Providers, ...options });

const customWait = (
  callback?: () => void,
  options?: {
    timeout?: number;
    interval?: number;
  },
): Promise<void> => {
  return wait(callback, { timeout: 1500, ...options });
};

export * from '@testing-library/react';
export { customRender as render, customWait as wait, axe, theme };
