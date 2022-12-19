import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    background: '#5E5E5E',
    width: '310px',
    height: '310px',
    top: '80px',
    left: '1365px',
    opacity: '20%',
    borderRadius: '8px',
  },
  walletDetails: {
    width: '281px',
    height: '124px',
    borderRadius: '8px',
    backgroundColor: '#D9D9D9',
    marginTop: theme.spacing(1),
  },
  changeWalletButton: {
    width: '281px',
    height: '46px',
    borderRadius: '8px',
    backgroundColor: '#4D4D4D',
    marginTop: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer',
      background: '#5e5c5c',
    },
  },
  changeWalletButtonLabel: {
    padding: theme.spacing(1.5, 3),
    fontSize: '16px',
    fontWeight: 590,
    lineHeight: '20px',
  },
  walletAvatar: {
    padding: theme.spacing(2, 0, 0, 3),
    display: 'inline-block',
  },
  walletLabel: {
    padding: theme.spacing(2, 0, 0, 1),
    display: 'inline-block',
    fontSize: '14px',
    fontWeight: 590,
    lineHeight: '17px',
    color: '#000000',
  },
  divider: {
    margin: theme.spacing(1, 4.1, 1, 2),
    color: '#34383E',
  },
  copyIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    width: '1rem',
    marginLeft: theme.spacing(1),
  },
  avatar: {
    height: '45px',
    width: '45px',
  },
  accountDetailsButton: {
    width: '232px',
    height: '28px',
    border: '1px solid #000000',
    borderRadius: '1000px',
    marginLeft: theme.spacing(3),
    '&:hover': {
      cursor: 'pointer',
      background: '#5e5c5c',
    },
  },
  accountDetailsLabel: {
    color: '#000000',
    textAlign: 'center',
  },
  accountDetails: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  dot: {
    height: theme.spacing(2),
    width: theme.spacing(2),
    backgroundColor: '#000000',
    borderRadius: 50,
    display: 'inline-flex',
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(1),
    verticalAlign: 'middle',
  },
}));

export const useStyles = () => styles();
