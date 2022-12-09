import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    width: '400px',
    height: '600px',
    top: '80px',
    left: '1330px',
    opacity: '20%',
    // position: 'absolute',
  },
}));

export const useStyles = () => styles();
