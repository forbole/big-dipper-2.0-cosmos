import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  icon: {
    margin: '0px 20px 0px 5px',
    borderRadius: '100px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: 'none',
    },
  },
}));

export const useStyles = () => styles();
