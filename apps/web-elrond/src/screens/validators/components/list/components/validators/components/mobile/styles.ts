import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((_theme) => ({
    root: {
      height: '100%',
    },
  }));

export const useStyles = () => styles();
