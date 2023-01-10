import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  },
  contentWrapper: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      flex: 1,
    },
  },
  footer: {
    [theme.breakpoints.up('lg')]: {
      position: 'relative',
      zIndex: 1299,
    },
  },
  appBarPlaceholder: {
    ...(theme.mixins.toolbar as CSSObject),
  },
  children: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    '& .main-content': {
      width: '100%',
      flex: 1,
    },
  },
}));

export default useStyles;
