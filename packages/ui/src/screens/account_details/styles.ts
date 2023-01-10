import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    display: 'grid',
    gridTemplateRows: 'auto',
    gap: theme.spacing(1),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      // gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
  balance: {
    [theme.breakpoints.up('lg')]: {
      // gridColumn: '1 / 3',
    },
  },
  otherTokens: {
    [theme.breakpoints.up('lg')]: {
      // gridColumn: '1 / 3',
    },
  },
  overview: {
    [theme.breakpoints.up('lg')]: {
      // gridColumn: '1 / 3',
    },
  },
  staking: {
    [theme.breakpoints.up('lg')]: {
      // gridColumn: '1 / 3',
    },
  },
  transactions: {
    [theme.breakpoints.up('lg')]: {
      // gridColumn: '1 / 3',
    },
  },
}));

export default useStyles;
