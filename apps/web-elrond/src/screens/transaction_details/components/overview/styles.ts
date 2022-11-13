import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    shard: {
      color: theme.palette.custom.fonts.fontFour,
      marginLeft: theme.spacing(0.5),
    },
  };
});

export const useStyles = () => {
  return styles();
};
