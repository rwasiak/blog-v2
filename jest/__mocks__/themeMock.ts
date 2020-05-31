import { BasicTheme, ExtendedTheme, Theme } from '../../src/design-system';

const basicTheme: BasicTheme = {
  space: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  maxWidths: {
    mainContent: 0,
    postContent: 1,
  },
  breakpoints: ['mobile', 'large-mobile', 'desktop', 'large-desktop'],
  colors: {
    black: 'color black',
    white: 'color white',
    primary: 'color primary',
    secondary: 'color secondary',
    tertiary: 'color tertiary',
    highlightInteractive: 'color highlightInteractive',
  },
  fonts: {
    primary: 'fonts primary',
    secondary: 'fonts secondary',
  },
};

const extendedTheme: ExtendedTheme = {
  typographyStyles: {
    headingS: {
      fontFamily: 'headingS fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'headingS color',
      textTransform: 'headingS textTransform',
      fontStyle: 'headingS fontStyle',
      lineHeight: 'headingS lineHeight',
    },
    heading: {
      fontFamily: 'heading fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'heading color',
      textTransform: 'heading textTransform',
      fontStyle: 'heading fontStyle',
      lineHeight: 'heading lineHeight',
    },
    headingL: {
      fontFamily: 'headingL fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'headingL color',
      textTransform: 'headingL textTransform',
      fontStyle: 'headingL fontStyle',
      lineHeight: 'headingL lineHeight',
    },
    textS: {
      fontFamily: 'textS fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'textS color',
      textTransform: 'textS textTransform',
      fontStyle: 'textS fontStyle',
      lineHeight: 'textS lineHeight',
    },
    text: {
      fontFamily: 'text fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'text color',
      textTransform: 'text textTransform',
      fontStyle: 'text fontStyle',
      lineHeight: 'text lineHeight',
    },
    textStrong: {
      fontFamily: 'textStrong fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'textStrong color',
      textTransform: 'textStrong textTransform',
      fontStyle: 'textStrong fontStyle',
      lineHeight: 'textStrong lineHeight',
    },
    textL: {
      fontFamily: 'textL fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'textL color',
      textTransform: 'textL textTransform',
      fontStyle: 'textL fontStyle',
      lineHeight: 'textL lineHeight',
    },
    textLStrong: {
      fontFamily: 'textLStrong fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'textLStrong color',
      textTransform: 'textLStrong textTransform',
      fontStyle: 'textLStrong fontStyle',
      lineHeight: 'textLStrong lineHeight',
    },
    quoteS: {
      fontFamily: 'quoteS fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'quoteS color',
      textTransform: 'quoteS textTransform',
      fontStyle: 'quoteS fontStyle',
      lineHeight: 'quoteS lineHeight',
    },
    quote: {
      fontFamily: 'quote fontFamily',
      fontWeight: 0,
      fontSize: 0,
      color: 'quote color',
      textTransform: 'quote textTransform',
      fontStyle: 'quote fontStyle',
      lineHeight: 'quote lineHeight',
    },
  },
  grid: {
    containerPx: 0,
  },
  link: {
    color: 'link color',
    activeStyles: {
      color: 'link active styles color',
      textDecoration: 'link active styles text decoration',
    },
  },
};

const theme: Theme = {
  ...basicTheme,
  ...extendedTheme,
};

export default theme;
