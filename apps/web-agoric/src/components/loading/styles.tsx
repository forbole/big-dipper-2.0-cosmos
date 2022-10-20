import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(2, 0),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    },
  )();

  return styles;
};
