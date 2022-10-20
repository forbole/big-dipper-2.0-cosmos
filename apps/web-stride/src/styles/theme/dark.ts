import Color from 'color';

const backgroundDefault = '#141617';
const surfaceOne = '#232829';
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
      main: Color('#E91179').alpha(0.7).string(),
      contrastText: '#FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#525252',
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
        one: '#E91179',
        two: '#F14196',
        three: '#45B1C4',
        four: '#378D9B',
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
        one: '#55F28C',
        two: '#1A88FF',
        three: '#DD1AFF',
        four: '#FFDC19',
        five: '#E91179',
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
