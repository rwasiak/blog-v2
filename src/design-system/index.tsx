import * as React from 'react';
import styled, { ThemeProvider, ThemeProviderProps } from 'styled-components';

export * from 'styled-components';
export * from 'styled-system';
export * from 'styled-normalize';
export default styled;

export interface Colors {
  black: string;
  white: string;
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface TextStyle {
  fontFamily: string;
  fontWeight: number;
  fontSize: number | (number | null)[];
  color: string;
  textTransform: string;
  fontStyle: string;
  lineHeight: string | (string | null)[];
}

export type TextStyleTypes =
  | 'headingS'
  | 'heading'
  | 'headingL'
  | 'textS'
  | 'text'
  | 'textL'
  | 'textStrong'
  | 'textLStrong'
  | 'quoteS'
  | 'quote';

export type Typography = {
  [K in TextStyleTypes]: TextStyle;
};

export interface BasicTheme {
  space: [
    0,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
  ];
  maxWidths: {
    aside: number;
    content: number;
  };
  breakpoints: string[];
  colors: Colors;
  fonts: {
    primary: string;
    secondary: string;
  };
}

export interface ExtendedTheme {
  typography: Typography;
}

export interface Theme extends BasicTheme, ExtendedTheme {}

export const DesignSystemProvider: React.FC<ThemeProviderProps<Theme>> = ({
  theme,
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
