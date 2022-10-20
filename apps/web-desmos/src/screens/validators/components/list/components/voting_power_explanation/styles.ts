import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          height: '100%',
        },
      });
    },
  )();

  return styles;
};
