const backgroundDefault = '##F7F7FF';
const surfaceOne = '#FFFFFF';
const surfaceTwo = '#EFEFEF'; // Figma general 3
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
      main: '#6B9EFF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#707070',
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
        highlight: '#6AA6FF',
      },
      primaryData: {
        one: '#AE73F8',
        two: '#6B9EFF',
        three: '#5ACF78',
        four: '#E3AB55',
      },
      tokenomics: {
        one: '#5E94FF',
        two: '#E3AB55',
        three: '#5ACF78',
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
        one: '#5ACF78',
        two: '#5E94FF',
        three: '#AE73F8',
        four: '#E3AB55',
        five: '#C25396',
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
