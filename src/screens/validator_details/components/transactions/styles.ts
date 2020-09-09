import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          minHeight: '500px',
          height: '50vh',
          display: 'flex',
          flexDirection: 'column',
          [theme.breakpoints.up('lg')]: {
            height: '100%',
          },
        },
        header: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        filter: {
          marginTop: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
            marginTop: 0,
            alignSelf: 'flex-end',
            minWidth: '300px',
          },
        },
        list: {
          flex: 1,
        },
      });
    },
  )();

  return styles;
};
