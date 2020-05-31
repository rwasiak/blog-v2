import * as React from 'react';
import { ThemeProvider } from '../../src/design-system';
import theme from '../__mocks__/themeMock';

const Provider: React.FC<any> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
