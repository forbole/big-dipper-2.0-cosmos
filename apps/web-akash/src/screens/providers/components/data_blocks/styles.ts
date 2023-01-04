import { makeStyles } from '@mui/styles';

const styles = makeStyles(
  (theme) => ({
    root: {
      display: 'grid',
      height: '100%',
      gap: theme.spacing(1),
      // gridTemplateRows: 'auto',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        // gap: theme.spacing(2),
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
    },
    activeProviders: {
      background: theme.palette.custom.primaryData.one,
    },
    activeLeases: {
      background: theme.palette.custom.primaryData.three,
    },
  }),
  { index: 1 }
);

export const useStyles = () => styles();
