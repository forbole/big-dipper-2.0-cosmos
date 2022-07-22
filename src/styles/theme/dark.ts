const backgroundDefault = '#000000';
const surfaceOne = '#1F1F1F';
const surfaceTwo = '#19191D'; // ?
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
      main: '#F3B211',
      contrastText: '#FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#494949',
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
      },
      primaryData: {
        one: '#F3B211',
        two: '#C69006',
        three: '#B7B00A',
        four: '#C86002',
      },
      tokenomics: {
        one: '#F3B211',
        two: '#2665FF',
        three: '#12F3B3',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
      },
      condition: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF9338',
        three: '#FF608A',
      },
      charts: {
        zero: '#E8E8E8',
        one: '#12F3B3',
        two: '#F26511',
        three: '#0D50E2',
        four: '#F3B211',
        five: '#F312C2',
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
