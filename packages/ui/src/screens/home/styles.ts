import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: '1fr',
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('md')]: {
      gridGap: theme.spacing(2),
      paddingRight: theme.spacing(1),
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(3, 1fr)',
      paddingRight: theme.spacing(3),
    },
  },
  mainInfo: {
    gridColumn: '1',
    overflowY: 'hidden',
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 3',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 3',
      height: '350px',
    },
  },
  dataBlocks: {
    gridColumn: '1',
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '3 / 4',
    },
  },
  hero: {
    gridColumn: '1',
    [theme.breakpoints.up('md')]: {
      gridColumn: '2 / 3',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '1 / 2',
      // height: '400px', // if we can get the change feature
      height: '350px',
    },
  },
  tokenomics: {
    gridColumn: '1',
    height: '375px',
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 2',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '2 / 3',
      height: '100%',
    },
  },
  consensus: {
    gridColumn: '1',
    height: '375px',
    [theme.breakpoints.up('md')]: {
      gridColumn: '2 / 3',
    },
    [theme.breakpoints.up('lg')]: {
      gridColumn: '3 / 4',
      height: '100%',
    },
  },
  bottom: {
    gridColumn: '1',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridColumn: '1 / 4',
    },
    [theme.breakpoints.up('lg')]: {
      gridGap: theme.spacing(2),
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '& .blocks': {
      [theme.breakpoints.up('md')]: {
        gridColumn: '1',
      },
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1',
      },
    },
    '& .transactions': {
      [theme.breakpoints.up('md')]: {
        gridColumn: '1',
      },
      [theme.breakpoints.up('lg')]: {
        gridColumn: '2',
      },
    },
  },
}));

export default useStyles;
