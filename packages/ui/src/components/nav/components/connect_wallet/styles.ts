import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  icon: {
    marginLeft: '20px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      margin: theme.spacing(2),
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: theme.palette.custom.general.icon,
      '& path': {
        fill: theme.palette.custom.general.icon,
      },
    },
  },
  connectButton: {
    textAlign: 'center',
    padding: '10px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  walletButton: {
    border: 'solid 1px',
    borderRadius: '15px',
    width: '200px',
    padding: '10px',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '500px',
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
}));

export const useStyles = () => styles();
