import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      overflow: 'hidden',
    },
    title: {
      marginBottom: theme.spacing(2),
    },
  };
});

export const useStyles = () => {
  return styles();
};
