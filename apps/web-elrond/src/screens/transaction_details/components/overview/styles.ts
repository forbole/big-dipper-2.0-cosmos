import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        shard: {
          color: theme.palette.custom.fonts.fontFour,
          marginLeft: theme.spacing(0.5),
        },
      });
    },
  )();

  return styles;
};
