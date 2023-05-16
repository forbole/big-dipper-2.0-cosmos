import { darkThemeOverride } from '@/styles/theme/dark';
import { deuteranopiaThemeOverride } from '@/styles/theme/deuteranopia';
import { lightThemeOverride } from '@/styles/theme/light';
import { tritanopiaThemeOverride } from '@/styles/theme/tritanopia';
import { ThemeOptions } from '@mui/material/styles';
import * as R from 'ramda';

/** Common themes that don't change across light and dark theme */
export const common = (theme: ThemeOptions) =>
  R.mergeDeepLeft(theme, {
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
    typography: {
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
          background: '#E6E6E6',
          surfaceOne: '#818181',
          surfaceTwo: '#818181',
          icon: '#999999',
        },
        fonts: {
          fontOne: '#E6E6E6',
          fontTwo: '#C4C4C4',
          fontThree: '#818181',
          fontFour: '#999999',
          fontFive: '#FFFFFF',
          highlight: '#FFFFFF',
        },
        primaryData: {
          one: '#F87255',
          two: '#FA9147',
          three: '#43BE7C',
          four: '#43A1BE',
        },
        results: {
          pass: '#1EC490',
          fail: '#FD3B4C',
        },
        tokenomics: {
          zero: '',
          one: "#43A1BE'",
          two: "#E3BB55'",
          three: '#20D292',
        },
        condition: {
          zero: '#E6E6E6',
          one: '#1EC490',
          two: '#FF9338',
          three: '#FF608A',
        },
        charts: {
          zero: '#E6E6E6',
          one: '#43BE7C',
          two: '#43BE7C',
          three: '#F44747',
          four: '#FA9147',
          five: '#C25396',
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
        wallet: {
          background: '#5E5E5E',
          backgroundTwo: '#212123',
          surfaceOne: '#5E5C5C',
          surfaceTwo: '#D9D9D9',
          surfaceThree: '#4D4D4D',
          surfaceFour: '#414141',
          surfaceFive: '#777777',
          divider: '#34383E',
          textPrimary: '#000000',
          textSecondary: '#DDDDDD',
          active: '#29CC6A',
          inactive: '#CC3929',
        },
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            '&': {
              backgroundImage: 'none',
            },
          },
        },
      },
      MuiSvgIcon: {
        defaultProps: {
          htmlColor: theme.palette?.custom?.general?.icon ?? '#999999', // same as custom /general /icons
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            '&': {
              backgroundColor: 'initial',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            '&': {
              borderRadius: '12px',
            },
          },
          input: {
            '&': {
              padding: '8px 12px',
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          popper: {
            pointerEvents: 'none',
          },
          tooltip: {
            pointerEvents: 'auto',
            background: theme.palette?.background?.paper,
            color: theme.palette?.text?.primary,
            padding: 4,
            borderRadius: 4,
          },
          arrow: {
            color: theme.palette?.divider,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            '&': {
              borderBottom: 'none',
              padding: '0 16px',
              height: '50px',
              fontSize: '1rem',
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
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
    },
  }) as ThemeOptions;

export const lightTemplate = common(lightThemeOverride as ThemeOptions);
export const darkTemplate = common(darkThemeOverride as ThemeOptions);
export const deuteranopiaTemplate = common(deuteranopiaThemeOverride as ThemeOptions);
export const tritanopiaTemplate = common(tritanopiaThemeOverride as ThemeOptions);
