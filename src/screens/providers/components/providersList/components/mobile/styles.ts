import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          height: '100%',
        },
        actionIcons: {
          width: '1rem',
          // marginLeft: theme.spacing(1),
        },
      });
    },
  )();

  return styles;
};
