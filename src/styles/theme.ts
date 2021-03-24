import * as R from 'ramda';
import {
  createMuiTheme, ThemeOptions,
} from '@material-ui/core/styles';
import Color from 'color';

/** Common themes that don't change across light and dark theme */
export const common = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
  mixins: {
    toolbar: {
      '@media (min-width: 1280px)': {
        height: '160px',
      },
    },
    layout: {
      padding: '16px',
      '@media (min-width: 1280px)': {
        padding: '16px 24px',
      },
    },
    tableCell: {
      height: '50px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        width: '100%',
      },
      '& .MuiTypography-body1': {
        whiteSpace: 'nowrap',
      },
    },
  },
  props: {
    MuiSvgIcon: {
      htmlColor: '#999999', // same as custom /general /icons
    },
  },
  typography: {
    fontFamily: '"Hind Madurai", sans-serif',
    h1: {
      fontSize: '2rem',
      letterSpacing: 0.25,
    },
    h2: {
      fontSize: '1.5rem',
      letterSpacing: 0,
    },
    h3: {
      fontSize: '1.25rem',
      letterSpacing: 0.15,
    },
    h4: {
      fontSize: '1rem',
      letterSpacing: 0.15,
    },
    h5: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.75rem',
      letterSpacing: 0.1,
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      whiteSpace: 'pre-wrap',
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4,
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      textTransform: 'none',
    },
  },
  palette: {
    custom: {
      general: {
        icon: '#999999',
      },
      chartData: {
        one: '#FF7846',
        two: '#E86F51',
        three: '#FFD800',
        four: '#1BA6BC',
        five: '#686868',
      },
      tags: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF961B',
        three: '#FC6A8A',
        four: '#9F46EC',
        five: '#2FA8CE',
        six: '#497BFF',
        seven: '#FF7549',
        eight: '#EB3AA4',
      },
      fonts: {
        fontFive: '#FFFFFF',
        highlight: '#1D86FF', // links
      },
    },
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: 'initial',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        padding: '0 16px',
        height: '50px',
        fontSize: '1rem',
      },
    },
    MuiTabs: {
      root: {
        '&.MuiTabs-root, & .MuiTab-root': {
          minHeight: '40px',
        },
        '& .MuiTab-textColorInherit': {
          opacity: 1,
          fontSize: '1rem',
        },
      },
    },
  },
};

/** Custom theme overrides for light mode */
const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: '#FFFFFF',
      '&.odd': {
        background: '#F8F8F8',
      },
    },
  },
  palette: {
    type: 'light',
    primary: {
      main: '#FD3B4C',
      contrastText: '#fff',
    },
    secondary: {
      main: '#1EC490',
    },
    background: {
      default: '#F8F8F8',
      paper: '#FFFFFF',
    },
    divider: '#E8E8E8',
    text: {
      primary: '#000000',
      secondary: '#414141',
    },
    custom: {
      general: {
        background: '#F8F8F8', // same as background default
        surfaceOne: '#FFFFFF', // same as background paper
        surfaceTwo: '#F8F8F8', // striped tables
      },
      fonts: {
        fontOne: '#000000',
        fontTwo: '#414141',
        fontThree: '#777777',
        fontFour: '#999999',
      },
      primaryData: {
        one: '#FA3A39',
        two: '#FD5E1F',
        three: '#FD5D4E',
        four: '#FD9526',
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
            backgroundColor: '#F8F8F8', // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: '#414141', // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: '#777777', // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: '#000000', // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#000000', // font one (?)
        },
      },
    },
  },
};

/** Custom theme overrides for dark mode */
const darkThemeOverride = {
  mixins: {
    tableCell: {
      background: '#131316',
      '&.odd': {
        background: '#19191D',
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: Color('#FD3B4C').alpha(0.7).string(),
      contrastText: '#fff',
    },
    secondary: {
      main: Color('#1EC490').alpha(0.7).string(),
    },
    background: {
      default: '#0A0A0A',
      paper: '#131316',
    },
    divider: '#3D3D43',
    text: {
      primary: '#E6E6E6',
      secondary: '#AAAAAB',
    },
    custom: {
      general: {
        background: '#0A0A0A', // same as background default
        surfaceOne: '#131316', // same as background paper
        surfaceTwo: '#19191D', // striped tables
      },
      fonts: {
        fontOne: '#E6E6E6',
        fontTwo: '#AAAAAB',
        fontThree: '#818181',
        fontFour: '#999999',
      },
      primaryData: {
        one: '#af2929',
        two: '#af2929',
        three: '#b14237',
        four: '#b16919',
      },
      results: {
        pass: '#198a65',
        fail: '#b12a34',
      },
    },
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: '#19191D', // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: '#AAAAAB', // font two
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: '#818181', // font three
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: '#E6E6E6', // font one
        },
        '& .MuiTabs-indicator': {
          backgroundColor: '#E6E6E6', // font one (?)
        },
      },
    },
  },
};

const light:ThemeOptions = R.mergeDeepLeft(lightThemeOverride, common);
const dark:ThemeOptions = R.mergeDeepLeft(darkThemeOverride, common);

export const lightTheme = createMuiTheme(light);
export const darkTheme = createMuiTheme(dark);
