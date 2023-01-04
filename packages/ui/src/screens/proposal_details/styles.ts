import { makeStyles } from '@mui/styles';

const styles = makeStyles(
  (theme) => ({
    root: {
      ...theme.mixins.layout,
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'min-content min-content auto',
      gap: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(2),
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    overview: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1 / 4',
      },
    },
    deposits: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1 / 4',
      },
    },
    votes: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1 / 4',
      },
    },
    votesGraph: {
      [theme.breakpoints.up('md')]: {
        gridColumn: '1 / 2',
      },
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1 / 4',
        height: 'auto',
      },
    },
  }),
  { index: 1 }
);

export const useStyles = () => styles();
