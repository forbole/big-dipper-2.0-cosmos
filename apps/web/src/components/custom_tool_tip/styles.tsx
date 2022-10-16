import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(2),
          background: Color(theme.palette.background.paper).alpha(0.9).string(),
        },
      });
    },
  )();

  return styles;
};
