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
        tokens: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
      });
    },
  )();

  return styles;
};
