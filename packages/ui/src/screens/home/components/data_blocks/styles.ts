import { makeStyles } from '@mui/styles';

const styles = makeStyles(
  (theme) => ({
    root: {
      display: 'grid',
      gap: theme.spacing(1),
      gridTemplateRows: 'auto',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
      [theme.breakpoints.up('lg')]: {
        gap: theme.spacing(2),
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
    blockHeight: {
      background: theme.palette.custom.primaryData.one,
    },
    blockTime: {
      background: theme.palette.custom.primaryData.two,
    },
    price: {
      background: theme.palette.custom.primaryData.three,
    },
    validators: {
      background: theme.palette.custom.primaryData.four,
    },
  }),
  { index: 1 }
);

export const useStyles = () => styles();
