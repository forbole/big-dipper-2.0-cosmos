import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '28px',
          height: '28px',
          minWidth: '28px',
          minHeight: '28px',
          borderRadius: '50%',
          overflow: 'hidden',
          background: theme.palette.custom.general.surfaceTwo,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
          },
        },
      });
    },
  )();

  return styles;
};
