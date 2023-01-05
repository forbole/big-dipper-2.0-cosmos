import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
    },
  },
  profile: {
    // [theme.breakpoints.up('lg')]: {
    //   gridColumn: '1/4',
    // },
  },
  overview: {
    // [theme.breakpoints.up('lg')]: {
    //   gridColumn: '1/4',
    // },
  },
  transactions: {
    // [theme.breakpoints.up('lg')]: {
    //   gridColumn: '1/4',
    // },
  },
}));

export default useStyles;
