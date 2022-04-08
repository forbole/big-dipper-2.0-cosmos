import Color from 'color';

const backgroundDefault = '#0A0A0A';
const surfaceOne = '#0c0d1c';
const surfaceTwo = '#19191D';
const fontOne = '#E6E6E6';
const fontTwo = '#AAAAAB';
const fontThree = '#818181';

export const cudosThemeOverride = {
  mixins: {
    tableCell: {
      background: surfaceOne,
      '&.odd': {
        background: surfaceTwo,
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: Color('#4b80e9').alpha(0.7).string(),
      contrastText: '#fff',
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
        background: backgroundDefault,
        surfaceOne,
        surfaceTwo,
      },
      fonts: {
        fontOne,
        fontTwo,
        fontThree,
        fontFour: '#999999',
      },
      primaryData: {
        one: '#5E7FE5',
        two: '#2E3368',
        three: '#5ac6c5',
        four: '#4fa1cd',
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
            backgroundColor: surfaceTwo,
          },
        },
        '& .MuiTableCell-root': {
          color: fontTwo,
        },
      },
    },
    MuiTabs: {
      root: {
        '& .MuiTab-textColorInherit': {
          color: fontThree,
        },
        '& .MuiTab-textColorInherit.Mui-selected': {
          color: fontOne,
        },
        '& .MuiTabs-indicator': {
          backgroundColor: fontOne,
        },
      },
    },
  },
};
