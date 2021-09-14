import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          margin: theme.spacing(3, 0),
        },
        title: {
          marginBottom: theme.spacing(0.5),
        },
        publisher: {
          color: theme.palette.custom.fonts.fontFour,
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
