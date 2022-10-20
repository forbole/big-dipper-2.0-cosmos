import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        validator: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        skipRate: {
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
