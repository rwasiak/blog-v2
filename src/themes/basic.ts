import { BasicTheme, ExtendedTheme, Theme } from '../design-system';

const basicTheme: BasicTheme = {
  space: [0, 2, 4, 8, 12, 16, 24, 32, 48, 64],
  maxWidths: {
    aside: 400,
    content: 800,
  },
  breakpoints: ['576px', '768px', '1366px', '1680px'],
  colors: {
    black: '#2f2f2f',
    white: '#FFFFFF',
    primary: '#AA0505',
    secondary: '#FBCA03',
    tertiary: '#FFF8E1',
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Oswald, sans-serif',
  },
};

const extendedTheme: ExtendedTheme = {
  typography: {
    headingS: {
      fontFamily: basicTheme.fonts.secondary,
      fontWeight: 400,
      fontSize: [20, 20, 22, 22, 24],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['24px', '24px', '28px', '28px', '32px'],
    },
    heading: {
      fontFamily: basicTheme.fonts.secondary,
      fontWeight: 600,
      fontSize: [22, 24, 26, 26, 28],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['24px', '30px', '34px', '34px', '36px'],
    },
    headingL: {
      fontFamily: basicTheme.fonts.secondary,
      fontWeight: 600,
      fontSize: [26, 28, 28, 30, 32],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['30px', '32px', '32px', '34px', '36px'],
    },
    textS: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 400,
      fontSize: [12, 12, 14, 14, 14],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['16px', '16px', '20px'],
    },
    text: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 400,
      fontSize: [14, 14, 16, 16, 16],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['22px', '22px', '24px'],
    },
    textStrong: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 600,
      fontSize: [14, 14, 16, 16, 16],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['22px', '22px', '24px'],
    },
    textL: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 400,
      fontSize: [18, 18, 20, 20, 22],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['24px', '24px', '26px', '26px', '28px'],
    },
    textLStrong: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 600,
      fontSize: [18, 18, 20, 20, 22],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'normal',
      lineHeight: ['24px', '24px', '26px', '26px', '28px'],
    },
    quoteS: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 300,
      fontSize: [12, 12, 14, 14, 14],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'italic',
      lineHeight: ['16px', '16px', '20px'],
    },
    quote: {
      fontFamily: basicTheme.fonts.primary,
      fontWeight: 300,
      fontSize: [14, 14, 16, 16, 16],
      color: basicTheme.colors.black,
      textTransform: 'none',
      fontStyle: 'italic',
      lineHeight: ['22px', '22px', '24px'],
    },
  },
};

const theme: Theme = {
  ...basicTheme,
  ...extendedTheme,
};

export default theme;
