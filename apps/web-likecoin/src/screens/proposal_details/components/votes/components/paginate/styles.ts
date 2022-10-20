import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginTop: theme.spacing(3),
        },
      });
    },
  )();

  return styles;
};
