import Color from 'color';

/** Custom theme overrides for dark mode */
export const darkThemeOverride = {
  mixins: {
    tableCell: {
      background: '#131316', // surface one
      '&.odd': {
        background: '#19191D', // surface two
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: Color('#FD3B4C').alpha(0.7).string(),
      contrastText: '#fff',
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
        two: '#b44516',
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
