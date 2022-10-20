import * as R from 'ramda';
import { ThemeOptions } from '@material-ui/core/styles';

import { darkThemeOverride } from './dark';
import { lightThemeOverride } from './light';

/** Common themes that don't change across light and dark theme */
export const common: ThemeOptions = {
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
      background: '#131316',
      '&.odd': {
        background: '#19191D',
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
    primary: {
      main: '#5DBF84',
      contrastText: '#fff',
    },
    secondary: {
      main: '#26C8E0',
    },
    tertiary: {
      main: '#C047D7',
    },
    background: {
      default: '#0A0A0A',
      paper: '#131316',
    },
    divider: '#3D3D43',
    text: {
      primary: '#E3E3E3',
      secondary: '#C4C4C4',
    },
    custom: {
      general: {
        background: '#0A0A0A', // same as background default
        surfaceOne: '#131316', // same as background paper
        surfaceTwo: '#19191D', // striped tables
        surfaceThree: '#232327', // instructions
        icon: '#999999',
      },
      fonts: {
        fontOne: '#E3E3E3',
        fontTwo: '#C4C4C4',
        fontThree: '#818181',
        fontFour: '#989898',
        fontFive: '#FFFFFF',
        highlight: '#7ED1EA', // links
        skipOne: '#DA3545', // list of skip rate colors
        skipTwo: '#E76343',
        skipThree: '#917F53',
        skipFour: '#4FC190',
      },
      primaryData: {
        one: '#23C981',
        two: '#21B6CC',
        three: '#6D6ACF',
        four: '#B34ED3',
      },
      priceData: {
        positive: '#24CB83',
        negative: '#DA3545',
      },
      conditionData: {
        positive: '#5DBF84',
        negative: '#DA3545',
      },
      chartData: {
        one: '#24CB83',
        two: '#E86F51',
        three: '#EAC46A',
        four: '#1BA6BC',
        five: '#686868',
      },
      condition: {
        zero: '#E8E8E8',
        one: '#1EC490',
        two: '#FF961B',
        three: '#FC6A8A',
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
      results: {
        pass: '#198a65',
        fail: '#b12a34',
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
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        padding: '0 16px',
        height: '50px',
        fontSize: '1rem',
      },
    },
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: '#19191D',
          },
        },
        '& .MuiTableCell-root': {
          color: '#C4C4C4',
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: 'transparent',
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
        // '&.MuiTabs-root, & .MuiTab-root': {
        //   minHeight: '40px',
        // },
        // '& .MuiTab-textColorInherit': {
        //   opacity: 1,
        //   color: '#818181',
        //   fontSize: '1rem',
        // },
        // '& .MuiTab-textColorInherit.Mui-selected': {
        //   color: '#E3E3E3',
        // },
        // '& .MuiTabs-indicator': {
        //   backgroundColor: '#E3E3E3',
        // },
      },
    },
  },
};

export const lightTemplate:ThemeOptions = R.mergeDeepLeft(lightThemeOverride, common);
export const darkTemplate:ThemeOptions = R.mergeDeepLeft(darkThemeOverride, common);
