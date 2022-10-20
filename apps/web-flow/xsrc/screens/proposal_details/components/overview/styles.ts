import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .label': {
            color: theme.palette.custom.fonts.fontThree,
          },
        },
        content: {
          marginTop: theme.spacing(2),
          display: 'grid',
          '& > *': {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.up('lg')]: {
              marginBottom: theme.spacing(2),
            },
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '150px auto',
          },
        },
        time: {
          marginTop: theme.spacing(2),
          display: 'grid',
          '& > *': {
            marginBottom: theme.spacing(1),
            [theme.breakpoints.up('md')]: {
              marginBottom: theme.spacing(2),
            },
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
      });
    },
  )();

  return styles;
};
