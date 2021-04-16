import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateRows: 'auto',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        balance: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
            // height: '360px',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '2 / 3',
            // height: '360px',
          },
        },
        staking: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
            height: '500px',
          },
        },
      });
    },
  )();

  return styles;
};
