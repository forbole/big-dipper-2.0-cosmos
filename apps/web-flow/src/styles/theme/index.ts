import * as R from 'ramda';
import { ThemeOptions } from '@material-ui/core/styles';

import { darkThemeOverride } from './dark';
import { lightThemeOverride } from './light';
import { deuteranopiaThemeOverride } from './deuteranopia';
import { tritanopiaThemeOverride } from './tritanopia';

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
        overflow: 'hidden',
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
    MuiButton: {
      disableElevation: true,
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
      tags: {
        zero: '#E8E8E8',
        one: '#2460FA',
        two: '#2BA891',
        three: '#E79720',
        four: '#F17047',
        five: '#DA4B4B',
        six: '#9438DC',
        seven: '#1A869D',
        eight: '#2C9944',
        nine: '#B49F31',
        ten: '#E9A846',
        eleven: '#E94681',
        twelve: '#C15EC4',
        thirteen: '#C388D9',
        fourteen: '#46AEE9',
        fifteen: '#58BC91',
        sixteen: '#90BC58',
        seventeen: '#E99E8E',
        eighteen: '#F0A479',
        nineteen: '#D37763',
        twenty: '#D9C788',
      },
      fonts: {
        fontFive: '#FFFFFF',
        highlight: '#1D86FF', // links
        // highlight: '#56B4E9', // links
      },
      condition: {
        zero: '#D3D3D3',
        one: '#37C365',
        two: '#ED862E',
        three: '#EB5079',
      },
      tokenomics: {
        one: '#4BD779',
        two: '#D56BCE',
        three: '#E9C746',
      },
      charts: {
        zero: '#D3D3D3',
        one: '#30A6E9',
        two: '#4BD779',
        three: '#D56BCE',
        four: '#E9C746',
        five: '#A660E1',
      },
    },
  },
  overrides: {
    MuiTableHead: {
      root: {
        backgroundColor: 'initial',
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'transparent',
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
        // '& .MuiTabs-fixed': {
        //   overflow: 'auto',
        // },
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

export const lightTemplate:ThemeOptions = R.mergeDeepLeft(lightThemeOverride, common);
export const darkTemplate:ThemeOptions = R.mergeDeepLeft(darkThemeOverride, common);
export const deuteranopiaTemplate:ThemeOptions = R.mergeDeepLeft(deuteranopiaThemeOverride, common);
export const tritanopiaTemplate:ThemeOptions = R.mergeDeepLeft(tritanopiaThemeOverride, common);

// export const lightTheme = createTheme(lightTemplate);
// export const darkTheme = createTheme(darkTemplate);
// export const deuteranopiaTheme = createTheme(deuteranopiaTemplate);
