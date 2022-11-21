import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: Color(theme.palette.background.paper).alpha(0.9).string(),
  },
}));

export const useStyles = () => styles();
