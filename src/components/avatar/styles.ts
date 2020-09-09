import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          overflow: 'hidden',
          background: theme.palette.custom.general.surfaceTwo,
          '& img': {
            width: '100%',
            height: 'auto',
          },
        },
      });
    },
  )();

  return styles;
};
