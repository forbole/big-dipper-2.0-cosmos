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
        // highlight: '#56B4E9', // links
      },
      condition: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF961B',
        three: '#FC6A8A',
      },
      tokenomics: {
        one: '#1EC490',
        two: '#497BFF',
        three: '#9F46EC',
      },
      charts: {
        zero: '#E8E8E8',
        one: '#EB3AA4',
        two: '#497BFF',
        three: '#FF961B',
        four: '#1EC490',
        five: '#9F46EC',
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

// export const lightTheme = createMuiTheme(lightTemplate);
// export const darkTheme = createMuiTheme(darkTemplate);
// export const deuteranopiaTheme = createMuiTheme(deuteranopiaTemplate);
