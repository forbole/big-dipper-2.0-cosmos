import { ThemeOptions } from '@mui/material';
import chainConfig from '@/chainConfig';

const { themes } = chainConfig();
const { dark: theme } = themes;

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/** Custom theme overrides for dark mode */
export const darkThemeOverride: DeepPartial<ThemeOptions> = {
  mixins: {
    tableCell: {
      background: theme.custom.general.surfaceOne, // surface one
      '&.odd': {
        background: theme.custom.general.surfaceTwo, // surface two
      },
    },
  },
  palette: {
    mode: 'dark',
    ...theme,
  },
  components: {
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            '&:nth-of-type(odd)': {
              backgroundColor: theme.custom.general.surfaceTwo, // surface two
            },
          },
          '& .MuiTableCell-root': {
            color: theme.custom.fonts.fontTwo, // font two
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTab-textColorInherit': {
            color: theme.custom.fonts.fontThree, // font three
          },
          '& .MuiTab-textColorInherit.Mui-selected': {
            color: theme.custom.fonts.fontOne, // font one
          },
          '& .MuiTabs-indicator': {
            backgroundColor: theme.custom.fonts.fontOne, // font one (?)
          },
        },
      },
    },
  },
};
