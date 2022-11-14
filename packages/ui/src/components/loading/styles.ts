import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(2, 0),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});

export const useStyles = () => {
  return styles();
};
