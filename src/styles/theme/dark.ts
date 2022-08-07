const backgroundDefault = '#000000';
const surfaceOne = '#1A1B1F';
const surfaceTwo = '#282828'; // general 3
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
      main: '#6000FF',
      contrastText: '##FFFFFF',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#707070',
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
        one: '#7D73C2',
        two: '#6A59DD',
        three: '#422FAF',
        four: '#2810B4',
      },
      tokenomics: {
        one: '#6366F1',
        two: '#F7931A',
        three: '#03B5AA',
      },
      results: {
        pass: '#1EC490',
        fail: '#FD3B4C',
      },
      condition: {
        zero: '#E6E6E6',
        one: '#1EC490',
        two: '#FF9338',
        three: '#FF608A',
      },
      charts: {
        zero: '#E8E8E8',
        one: '#8B5CF6',
        two: '#F7931A',
        three: '#ED254E',
        four: '#03B5AA',
        five: '#FF608A',
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
