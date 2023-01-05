import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: Color(theme.palette.background.paper).alpha(0.9).string(),
  },
}));

export default useStyles;
