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
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  profile: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1/4',
    },
  },
  stake: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1/3',
    },
  },
  overview: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '3/4',
    },
  },
  contractDetails: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1/4',
    },
  },
  nodes: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1/4',
    },
  },
  transaction: {
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1/4',
    },
  },
}));

export default useStyles;
