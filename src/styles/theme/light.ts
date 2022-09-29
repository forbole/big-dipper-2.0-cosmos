import { chainConfig } from '@configs';

const {
  background, primary, divider, text, fonts,
  primaryData, results, tokenomics, condition, charts,
} = chainConfig.style.themes.light;

/** Custom theme overrides for light mode */
export const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: background.surfaceOne, // surface one
      '&.odd': {
        background: background.surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: primary.main,
      contrastText: primary.contrastText,
    },
    background: {
      default: background.default,
      paper: background.surfaceOne,
    },
    divider,
    text: {
      primary: text.primary,
      secondary: text.secondary,
    },
    custom: {
      general: {
        background: background.default, // same as background default
        surfaceOne: background.surfaceOne, // same as background paper
        surfaceTwo: background.surfaceTwo, // striped tables
      },
      fonts: {
        fontOne: fonts.fontOne,
        fontTwo: fonts.fontTwo,
        fontThree: fonts.fontThree,
        fontFour: fonts.fontFour,
        fontFive: fonts.fontFive,
        highlight: fonts.highlight,
      },
      primaryData: {
        one: primaryData.one,
        two: primaryData.two,
        three: primaryData.three,
        four: primaryData.four,
      },
      results: {
        pass: results.pass,
        fail: results.fail,
      },
      tokenomics: {
        one: tokenomics.one,
        two: tokenomics.two,
        three: tokenomics.three,
      },
      condition: {
        zero: condition.zero,
        one: condition.one,
        two: condition.two,
        three: condition.three,
      },
      charts: {
        zero: charts.zero,
        one: charts.one,
        two: charts.two,
        three: charts.three,
        four: charts.four,
        five: charts.five,
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: background.surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fonts.fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fonts.fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fonts.fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fonts.fontOne, // font one (?)
        },
      },
    },
  },
};
