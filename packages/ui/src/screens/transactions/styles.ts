import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
  box: {
    minHeight: '500px',
    height: '50vh',
    padding: `0px 0px ${theme.spacing(4)}px 0px !important`,
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      minHeight: '65vh',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down(401)]: {
      '& > h1': {
        fontSize: '1.75rem',
      },
      '& > h4': {
        fontSize: '0.75rem',
      },
    },
  },
}));

export default useStyles;
