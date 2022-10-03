import Color from 'color';

const backgroundDefault = '#000000';
const surfaceOne = '#1C1F1F';
const surfaceTwo = '#333333'; // Figma general 3
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
      main: Color('#FB6E4E').alpha(0.7).string(),
      contrastText: '#FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#525252',
    text: {
      primary: '#E6E6E6',
      secondary: '#E6E6E6',
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
        one: '#FB6E4E',
        two: '#DE4454',
        three: '#656565',
        four: '#434343',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
      },
      condition: {
        zero: '#E8E8E8', // Condition/1
        one: '#1EC490', // Condition/2
        two: '#FF9338', // Condition/3
        three: '#FF608A', // Condition/4
      },
      charts: {
        zero: '#E8E8E8',
        one: '#8FF053',
        two: '#4E7EFB',
        three: '#AF4EFB',
        four: '#FBCB4E',
        five: '#FB6E4E',
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
