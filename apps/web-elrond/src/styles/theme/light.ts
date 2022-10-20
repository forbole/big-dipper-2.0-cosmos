const backgroundDefault = '#F8F8F8';
const surfaceOne = '#FFFFFF';
const surfaceTwo = '#F8F8F8';
const fontOne = '#000000';
const fontTwo = '#414141';
const fontThree = '#777777';

/** Custom theme overrides for light mode */
export const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#2F65DD',
      contrastText: '#fff',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#E8E8E8',
    text: {
      primary: '#000000',
      secondary: '#414141',
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
        highlight: '#2F65DD',
      },
      primaryData: {
        one: '#3E71E3',
        two: '#4493DB',
        three: '#279FBA',
        four: '#27BAA8',
      },
      tokenomics: {
        one: '#3E71E3',
        two: '#F79E4D',
        three: '#27BAA8',
      },
      // condition: {
      //   zero: '#D3D3D3',
      //   one: '#67B878',
      //   two: '#F79E4D',
      //   three: '#EB5079',
      // },
      // charts: {
      //   zero: '#D3D3D3',
      //   one: '#27BAA8',
      //   two: '#4493DB',
      //   three: '#F79E4D',
      //   four: '#ED5A5A',
      //   five: '#906CDE',
      // },
      results: {
        pass: '#12B785',
        fail: '#E94848',
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
