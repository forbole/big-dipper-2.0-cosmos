const backgroundDefault = '#000000';
const surfaceOne = '#0F101C';
const surfaceTwo = '#181A2D';
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
      main: '#FE4080',
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
        one: '#D3356F',
        two: '#B443DB',
        three: '#6333ED',
        four: '#14AACB',
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
