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
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
          [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '65vh',
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
