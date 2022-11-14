import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => {
  return {
    multisend: {
      marginTop: '0',
    },
  };
});

export const useStyles = () => {
  return styles();
};
