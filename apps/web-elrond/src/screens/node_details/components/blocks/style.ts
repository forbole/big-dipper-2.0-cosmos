import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        title: {
          marginBottom: theme.spacing(2),
        },
      });
    },
  )();

  return styles;
};
