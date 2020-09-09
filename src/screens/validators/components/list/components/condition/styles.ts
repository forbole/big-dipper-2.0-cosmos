import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '10px',
          height: '10px',
          background: theme.palette.custom.tags.zero,
          margin: '0 auto',
          borderRadius: '50%',
        },
      });
    },
  )();

  return styles;
};
