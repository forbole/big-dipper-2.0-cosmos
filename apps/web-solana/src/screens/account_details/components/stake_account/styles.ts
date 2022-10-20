import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        balance: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        delegation: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        accounts: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        tokens: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
      });
    },
  )();

  return styles;
};
