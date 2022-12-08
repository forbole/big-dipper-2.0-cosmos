import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '&&': {
      background: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      height: 'max(80px, min(116px, calc(100vw / 7)))',
      '& img': {
        padding: theme.spacing(1),
        maxWidth: '100%',
        objectFit: 'contain',
      },
    },
  },
}));

export const useStyles = () => styles();
