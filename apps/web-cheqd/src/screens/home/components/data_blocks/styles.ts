import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateRows: 'auto',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(5, 1fr)',
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
  cheqdWallets: {
    background: theme.palette.custom.primaryData.one,
    [theme.breakpoints.down('lg')]: {
      gridColumn: '1 / span 2',
      alignItems: 'center',
      '& .content': {
        justifyContent: 'center',
      },
    },
  },
}));

export default useStyles;
