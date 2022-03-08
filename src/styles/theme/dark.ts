import Color from 'color';

const backgroundDefault = '#000000';
const surfaceOne = '#171717';
const surfaceTwo = '#242424';
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
      main: '#FF6557',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#282828',
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
        highlight: '#379AFE',
      },
      primaryData: {
        one: '#D84839',
        two: '#FE5834',
        three: '#B021F3',
        four: '#4C78EA',
      },
      condition: {
        zero: '#E6E6E6',
        one: '#1EC490',
        two: '#FF9338',
        three: '#FF608A',
      },
      tokenomics: {
        one: '#E46245',
        two: '#E3BB55',
        three: '#20D292',
      },
      charts: {
        zero: '#E6E6E6',
        one: '#5ACF78',
        two: '#E46245',
        three: '#D2463A',
        four: '#E3AB55',
        five: '#C25396',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
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
