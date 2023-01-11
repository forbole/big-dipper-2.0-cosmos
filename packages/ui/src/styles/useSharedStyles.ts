import { Theme } from '@mui/material/styles';
import { makeStyles } from 'tss-react/mui';

export const sharedStyles = (theme: Theme) => ({
  hiddenUntilXl: {
    [theme.breakpoints.down('xl')]: {
      display: 'none',
    },
  },
  hiddenWhenXl: {
    [theme.breakpoints.up('xl')]: {
      display: 'none',
    },
  },
  hiddenUntilLg: {
    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
  hiddenWhenLg: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
  hiddenUntilMm: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  hiddenWhenMm: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  hiddenUntilSm: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  hiddenWhenSm: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  hiddenWhenXs: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
  },
  hidden: {
    display: 'none',
  },
});

const useSharedStyles = makeStyles()(sharedStyles);

export default useSharedStyles;
