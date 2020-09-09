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
            minHeight: '65vh',
          },
        },
        filter: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
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
