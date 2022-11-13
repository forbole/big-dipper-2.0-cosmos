import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      marginTop: theme.spacing(3),
    },
  };
});

export const useStyles = () => {
  return styles();
};
