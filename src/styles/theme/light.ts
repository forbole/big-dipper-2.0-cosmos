/** Custom theme overrides for light mode */
export const lightThemeOverride = {
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
