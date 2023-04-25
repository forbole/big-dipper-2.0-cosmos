import { CSSObject } from 'tss-react';
import { makeStyles } from 'tss-react/mui';

export const HEIGHT_MOBILE_CODE = 25;
export const HEIGHT_MOBILE_CONTRACT = 49;
export const HEIGHT_DESKTOP = 7;

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
  },
  header: {
    '&& > .MuiGrid2-root': {
      display: 'flex',
      flexWrap: 'wrap',
      padding: theme.spacing(2),
      color: theme.palette.text.primary,
    },
  },
  skeleton: {
    minHeight: theme.spacing(6),
    width: '100%',
  },
  odd: {
    background: theme.palette.custom.general.surfaceTwo,
  },
  row: {
    background: theme.palette.background.paper,
    '&& > .MuiGrid2-container': {
      position: 'relative',
      [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(1),
      },
    },
    '&& .MuiDivider-root': {
      width: '100%',
    },
    '&& > .MuiGrid2-container > .MuiGrid2-root': {
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'center',
      padding: theme.spacing(1),
    },
    '&& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
  cell: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: '100%',
  },
  label: {
    margin: theme.spacing(0, 0, 0.5, 0),
    color: theme.palette.custom.fonts.fontThree,
    width: '100%',
  },
  value: {
    color: theme.palette.custom.fonts.fontTwo,
    wordBreak: 'break-all',
    height: theme.spacing(HEIGHT_DESKTOP),
    width: '100%',
  },
  textfield: {
    background: theme.palette.background.default,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 300,
    },
    '&& .Mui-focused': {
      background: theme.palette.divider,
      '&& input': {
        color: theme.palette.custom.fonts.fontFour,
      },
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexFlow: 'column nowrap',
    minHeight: 'calc(100vh - 105px)',
    '& .MuiTab-root': {
      fontSize: theme.typography.h2.fontSize,
      paddingRight: theme.spacing(8),
    },
    '&& .Mui-selected': {
      color: theme.palette.custom.fonts.fontOne,
    },
  },
  list: {
    flex: 1,
  },
  contractName: {
    '.MuiTypography-subtitle1': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
}));

export default useStyles;
