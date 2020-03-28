import colors from './colors';

export const fonts = {
  // title: "CobblerSans-Black",
  // body: "CobblerSans-Black",
  title: 'system font',
  body: 'system font',
};

export default {
  colors: colors,
  space: [0, 6, 10, 17, 30, 64, 128, 256, 512],
  fontSizes: [12, 14, 18, 20, 24, 32],
  headerHeight: 40,
  fonts: fonts,
  lineHeights: {
    body: 12,
    height: 14,
  },
  fontWeights: ['normal', 'bold', '400', '700'],
  radii: [4, 8, 30],
  // VARIANTS
  textStyles: {
    title1: {
      fontSize: '20px',
      lineHeight: 30,
      fontFamily: fonts.title,
      color: 'white',
    },
    title2: {
      fontSize: '22px',
      lineHeight: 30,
      fontFamily: fonts.title,
      color: 'white',
    },
    title3: {
      fontSize: '20px',
      lineHeight: 30,
      fontFamily: fonts.title,
      color: 'white',
    },
    title4: {
      fontSize: '18',
      lineHeight: 30,
      fontFamily: fonts.title,
      color: 'white',
    },
    body: {
      fontSize: '15px',
      lineHeight: 30,
      color: 'white',
      fontFamily: fonts.body,
    },
    buttonTitle: {
      color: 'white',
      fontFamily: fonts.title,
      fontSize: '20px',
      lineHeight: 30,
    },
    body: {
      color: 'white',
      fontSize: '15px',
      lineHeight: 17,
    },
    inlineLink: {
      fontSize: "15px",
      lineHeight: 20,
      fontWeight: "bold",
      color: "lightPink",
      fontFamily: fonts.body,
    },
  },
};
