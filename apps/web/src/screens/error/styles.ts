import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          padding: theme.spacing(6),
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
          '& .details': {
            marginBottom: theme.spacing(5),
          },
          '& .container': {
            maxWidth: '600px',
          },
        },
      });
    },
  )();

  return styles;
};
