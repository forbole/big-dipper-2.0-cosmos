const backgroundDefault = '#000000';
const surfaceOne = '#1C1C1C';
const surfaceTwo = '#252527';
const fontOne = '#FFFFFF';
const fontTwo = '#C4C4C4';
const fontThree = '#DA00FD';
const icon = '#9F9F9F';

/** Custom theme overrides for deuteranopia mode */
export const deuteranopiaThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: icon, // same as custom /general /icons
    },
  },
  palette: {
    type: 'dark',
    general: {
      icon,
    },
    primary: {
      main: '#FFDC3D',
      contrastText: '#000000',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#3D3D43',
    text: {
      primary: '#FFFFFF',
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
        fontFour: '#9F9F9F',
        highlight: '#FFAC3B', // links
      },
      primaryData: {
        one: '#8400CD',
        two: '#A700FC',
        three: '#DA00FD',
        four: '#FF3CFE',
      },
      results: {
        pass: '#005FCC',
        fail: '#CD022D',
      },
      tags: {
        zero: '#F9F9F9',
        one: '#F9F9F9',
        two: '#F9F9F9',
        three: '#F9F9F9',
        four: '#F9F9F9',
        five: '#F9F9F9',
        six: '#F9F9F9',
        seven: '#F9F9F9',
        eight: '#F9F9F9',
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
