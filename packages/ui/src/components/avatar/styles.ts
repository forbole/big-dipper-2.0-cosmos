import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    width: '28px',
    height: '28px',
    minWidth: '28px',
    minHeight: '28px',
    borderRadius: '50%',
    overflow: 'hidden',
    background: theme.palette.custom.general.surfaceTwo,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center center',
    },
  },
  img: {
    width: 'auto',
    height: 'auto',
  },
}));

export const useStyles = () => styles();
