import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '&&': {
      background: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      height: 'min(116px, calc(100vw / 5))',
      '& img': {
        padding: theme.spacing(2),
        maxWidth: '100%',
        objectFit: 'contain',
      },
    },
  },
}));

export const useStyles = () => styles();
