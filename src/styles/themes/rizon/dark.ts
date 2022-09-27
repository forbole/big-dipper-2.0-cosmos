const backgroundDefault = '#0F0F22';
const surfaceOne = '#1A1A35';
const surfaceTwo = '#2A2A45';
const fontOne = '#E6E6E6';
const fontTwo = '#C4C4C4';
const fontThree = '#818181';

/** Custom theme overrides for dark mode */
export const darkThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#6A63FF',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#363A51',
    text: {
      primary: '#E6E6E6',
      secondary: '#C4C4C4',
    },
    custom: {
      general: {
        background: backgroundDefault, // same as background default
        surfaceOne, // same as background paper
        surfaceTwo, // striped tables
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
        highlight: '#6AA6FF',
      },
      primaryData: {
        one: '#5A579C',
        two: '#25BE97',
        three: '#1CAFE0',
        four: '#D4B855',
      },
      tokenomics: {
        one: '#25BE97',
        two: '#D4B855',
        three: '#1CAFE0',
      },
      results: {
        pass: '#25BE97',
        fail: '#FD3B4C',
      },
      condition: {
        zero: '#E8E8E8',
        one: '#25BE97',
        two: '#FF9338',
        three: '#FF608A',
      },
      charts: {
        zero: '#E8E8E8',
        one: '#25BE97',
        two: '#6E69D2',
        three: '#1CAFE0',
        four: '#D4B855',
        five: '#D859B4',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo, // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree, // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne, // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne, // font one (?)
        },
      },
    },
  },
};
