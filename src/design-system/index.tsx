import * as React from 'react';
import styled, { ThemeProvider, ThemeProviderProps } from 'styled-components';
import { SpaceProps } from 'styled-system';

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
  highlightInteractive: string;
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
  | 'headingXL'
  | 'textS'
  | 'text'
  | 'textL'
  | 'textStrong'
  | 'textLStrong'
  | 'quoteS'
  | 'quote';

export type TypographyStyles = {
  [K in TextStyleTypes]: TextStyle;
};

export interface ActiveLinkStyles {
  color: string;
  textDecoration: string;
}

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
    mainContent: number | (number | null)[];
    postContent: number | (number | null)[];
  };
  breakpoints: string[];
  colors: Colors;
  fonts: {
    primary: string;
    secondary: string;
  };
}

export interface ExtendedTheme {
  typographyStyles: TypographyStyles;
  grid: {
    containerPx: SpaceProps['px'];
  };
  link: {
    color: string;
    activeStyles: ActiveLinkStyles;
  };
}

export interface Theme extends BasicTheme, ExtendedTheme {}

export const DesignSystemProvider: React.FC<ThemeProviderProps<Theme>> = ({
  theme,
  children,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
