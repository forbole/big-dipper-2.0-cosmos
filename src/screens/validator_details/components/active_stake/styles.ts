import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        label: {
          marginBottom: theme.spacing(2),
        },
        dateWrapper: {
          [theme.breakpoints.up('sm')]: {
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: theme.spacing(2),
          },
        },
        date: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            marginBottom: 0,
            '&:first-child': {
              marginRight: theme.spacing(6),
            },
          },
        },
        chart: {
          height: '250px',
          marginTop: theme.spacing(1),
          [theme.breakpoints.up('md')]: {
            height: '350px',
          },
          [theme.breakpoints.up('lg')]: {
            height: '450px',
          },
        },
      });
    },
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
