import chainConfig from 'ui/dist/chainConfig';

const { light: theme } = chainConfig.themes;

/** Custom theme overrides for light mode */
export const lightThemeOverride = {
  mixins: {
    tableCell: {
      background: theme.custom.general.surfaceOne, // surface one
      '&.odd': {
        background: theme.custom.general.surfaceTwo, // surface two
      },
    },
  },
  palette: {
    type: 'light',
    ...theme,
  },
  overrides: {
    MuiTableBody: {
      root: {
        '& .MuiTableRow-root': {
          '&:nth-child(odd)': {
            backgroundColor: theme.custom.general.surfaceTwo, // surface two
          },
        },
        '& .MuiTableCell-root': {
          color: theme.custom.fonts.fontTwo, // font two
        },
      },
    },
    MuiTabs: {
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
};
