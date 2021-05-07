import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          flexDirection: 'column',
          height: '100%',
        },
      });
    },
  )();

  return styles;
};
