const backgroundDefault = '#F6F6F6';
const surfaceOne = '#FEFFFF';
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
      main: '#FB6E4E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#7A7A7A',
    text: {
      primary: '#000000',
      secondary: '#525252',
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
