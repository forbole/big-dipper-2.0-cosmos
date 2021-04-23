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
          '&.green': {
            background: theme.palette.custom.tags.one,
          },
          '&.yellow': {
            background: theme.palette.custom.tags.two,
          },
          '&.red': {
            background: theme.palette.custom.tags.three,
          },
        },
      });
    },
  )();

  return styles;
};
