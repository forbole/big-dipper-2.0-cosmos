import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((_theme) => {
  return {
    root: {
      height: '100%',
    },
  };
});

export const useStyles = () => {
  return styles();
};
