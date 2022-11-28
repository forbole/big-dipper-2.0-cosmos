import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '&&': {
      background: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing(2),
      '& img': {
        maxWidth: '100%',
      },
    },
  },
}));

export const useStyles = () => styles();
