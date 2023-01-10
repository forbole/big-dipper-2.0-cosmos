import { ThemeOptions } from '@mui/material';

const backgroundDefault = '#000000';
const surfaceOne = '#1C1C1C';
const surfaceTwo = '#252527';
const fontOne = '#FFFFFF';
const fontTwo = '#C4C4C4';
const fontThree = '#8D8D8D';
const icon = '#9F9F9F';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/** Custom theme overrides for deuteranopia mode */
export const deuteranopiaThemeOverride: DeepPartial<ThemeOptions> = {
  mixins: {
    tableCell: {
      background: surfaceOne, // surface one
      '&.odd': {
        background: surfaceTwo, // surface two
      },
    },
  },
  palette: {
    mode: 'dark',
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
        icon,
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#9F9F9F',
        fontFive: '#FFFFFF',
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
        nine: '#F9F9F9',
        ten: '#F9F9F9',
        eleven: '#F9F9F9',
        twelve: '#F9F9F9',
        thirteen: '#F9F9F9',
        fourteen: '#F9F9F9',
        fifteen: '#F9F9F9',
        sixteen: '#F9F9F9',
        seventeen: '#F9F9F9',
        eighteen: '#F9F9F9',
        nineteen: '#F9F9F9',
        twenty: '#F9F9F9',
      },
      condition: {
        zero: '#6D6D6C',
        one: '#FFFFFF',
        two: '#FFAC3B',
        three: '#0079FA',
      },
      tokenomics: {
        one: '#009FFA',
        two: '#F60239',
        three: '#FF92FD',
      },
      charts: {
        zero: '#6D6D6C',
        one: '#FFDF01',
        two: '#F60239',
        three: '#A40122',
        four: '#009FFA',
        five: '#FF92FD',
      },
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        htmlColor: icon, // same as custom /general /icons
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            '&:nth-of-type(odd)': {
              backgroundColor: surfaceTwo, // surface two
            },
          },
          '& .MuiTableCell-root': {
            color: fontTwo, // font two
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
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
  },
};
