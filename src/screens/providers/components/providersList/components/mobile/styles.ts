import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
        },
        list: {
          minHeight: '500px',
          height: '50vh',
        },
        actionIcons: {
          width: '1rem',
          marginLeft: theme.spacing(1),
        },
        emailIcon: {
          width: '1.5rem',
        },
      });
    },
  )();

  return styles;
};
