import { ThemeOptions } from '@mui/material';

const backgroundDefault = '#0A0A0A';
const surfaceOne = '#18181C';
const surfaceTwo = '#252529';
const fontOne = '#E6E6E6';
const fontTwo = '#AAAAAB';
const fontThree = '#818181';
const icon = '#9F9F9F';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/** Custom theme overrides for tritanopia mode */
export const tritanopiaThemeOverride: DeepPartial<ThemeOptions> = {
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
      main: '#F60239',
      contrastText: '#000000',
    },
    background: {
      default: backgroundDefault,
      paper: surfaceOne,
    },
    divider: '#3D3D43',
    text: {
      primary: '#E6E6E6',
      secondary: '#AAAAAB',
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
        fontFour: '#999999',
        fontFive: '#FFFFFF',
        highlight: '#009FFA', // links
      },
      primaryData: {
        one: '#AF2929',
        two: '#B44516',
        three: '#B14237',
        four: '#B16919',
      },
      results: {
        pass: '#008169',
        fail: '#F60239',
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
        two: '#2068A6',
        three: '#FF6E3A',
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
