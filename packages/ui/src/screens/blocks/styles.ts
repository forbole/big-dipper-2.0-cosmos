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
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      minHeight: '65vh',
    },
  },
}));

export default useStyles;
