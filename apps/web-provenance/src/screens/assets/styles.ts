import { CSSObject } from 'tss-react';
import { makeStyles } from 'tss-react/mui';

export const HEIGHT_MOBILE = 36;
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
    },
  },
  skeleton: {
    minHeight: theme.spacing(6),
    width: '100%',
  },
  odd: {
    background: theme.palette.custom.general.surfaceTwo,
  },
  price: {
    [theme.breakpoints.up('lg')]: {
      lineHeight: theme.spacing(HEIGHT_DESKTOP),
    },
  },
  row: {
    background: theme.palette.custom.general.surfaceOne,
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
  Popper: {
    '&&': {
      width: theme.spacing(2),
    },
  },
  showMoreContainer: {
    '&&': {
      padding: theme.spacing(2),
      maxWidth: 640,
      overflow: 'auto',
      border: `1px solid ${theme.palette.getContrastText(theme.palette.background.paper)}`,
    },
  },
  showMoreButtonActive: {
    transform: 'rotate(180deg)',
  },
  showMore: {
    '&&': {
      [theme.breakpoints.up('lg')]: {
        width: theme.spacing(8),
        marginLeft: `-${theme.spacing(3)} !important`,
      },
    },
    '&& .MuiSvgIcon-root': {
      [theme.breakpoints.down('lg')]: {
        fontSize: theme.spacing(5),
        marginRight: `-${theme.spacing(1.5)}`,
      },
    },
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
  description: {
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  nativeTokenName: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& .MuiGrid2-root': {
      padding: 0,
      margin: 0,
    },
    '& .MuiGrid2-root:first-of-type': {
      width: theme.spacing(4),
      padding: theme.spacing(0, 0.125, 0, 0.125),
      marginRight: theme.spacing(0.5),
    },
  },
  textfield: {
    backgroundColor: theme.palette.divider,
    width: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 300,
    },
  },
  paper: {
    padding: theme.spacing(2),
    height: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
  },
  list: {
    flex: 1,
  },
  supply: {
    textAlign: 'right',
  },
}));

export default useStyles;
