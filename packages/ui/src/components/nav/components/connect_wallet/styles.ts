import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  icon: {
    marginLeft: '20px',
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
  connectButton: {
    padding: '0px 40px',
  },
  connectConnectWallet: {
    padding: '0px 40px',
  },
  connectKeplrButton: {
    padding: '0px 55px',
  },
  connectButterButton: {
    padding: '0px 30px',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  walletButton: {
    border: 'solid 1px',
    borderRadius: '24px',
    width: '100px',
    height: '100px',
    fontSize: '16px',
    justifyContent: 'left',
    overflow: 'visible',
    background: '#D9D9D9',
    '&:hover': {
      background: theme.palette.primary.dark,
      borderColor: theme.palette.primary.dark,
    },
  },
  header: {
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: '72px 32px 32px 37px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '600px',
    },
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '115px 16px 16px 16px',
  },
  dialogContent: {
    display: 'inline-flex',
    paddingBottom: theme.spacing(3),
    overflow: 'visible',
  },
  buttonLabel: {
    justifyContent: 'left',
    fontSize: '16px',
    marginTop: theme.spacing(18),
    marginLeft: '-10px',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px 16px',
    width: '114px',
    height: '44px',
    background: '#D9D9D9',
    borderRadius: '8px',
  },
}));

export const useStyles = () => styles();
