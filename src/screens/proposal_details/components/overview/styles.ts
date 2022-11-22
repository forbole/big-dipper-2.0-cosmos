import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .label': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .content': {
            marginBottom: theme.spacing(2),
            display: 'block',
            [theme.breakpoints.up('lg')]: {
              display: 'flex',
            },
          },
          '& .recipient': {
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('lg')]: {
              display: 'block',
            },
          },
          '& .amountRequested': {
            marginBottom: theme.spacing(2),
            display: 'block',
            padding: '0',
            [theme.breakpoints.up('lg')]: {
              display: 'block',
              paddingLeft: '30px',
            },
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
            gridTemplateColumns: '200px auto',
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
