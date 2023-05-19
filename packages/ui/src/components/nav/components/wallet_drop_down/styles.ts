import { makeStyles } from 'tss-react/mui';

const styles = makeStyles()((theme) => ({
  root: {
    background: theme.palette.custom.wallet?.background,
    top: theme.spacing(8.7),
    right: '55px',
    opacity: '20%',
    zIndex: 1,
    borderRadius: theme.spacing(1),
    overflow: 'auto',
    [theme.breakpoints.up('lg')]: {
      right: '120px',
    },
  },
  walletTitle: {
    color: theme.palette.custom.fonts.fontOne,
    fontSize: theme.spacing(2),
    fontWeight: 400,
    paddingBottom: theme.spacing(4),
  },
  walletDetails: {
    height: 'max-content',
    backgroundColor:
      theme.palette.mode === 'dark' ? '#282828' : theme.palette.custom.wallet?.surfaceTwo,
    border: `1px solid ${theme.palette.custom.wallet?.surfaceFour}`,
    borderRadius: theme.spacing(0.5),
    ':hover': {
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.custom.wallet?.surfaceFour : '#12121229',
    },
  },
  walletInfo: {
    verticalAlign: 'middle',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    padding: theme.spacing(2),
  },
  changeWalletButton: {
    height: '46px',
    borderRadius: theme.spacing(1),
    backgroundColor: 'transparent',
    marginTop: theme.spacing(2.6),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.palette.mode === 'dark' ? theme.palette.custom.wallet?.surfaceFour : '#12121229',
    },
  },
  changeWalletButtonLabel: {
    fontWeight: 400,
    lineHeight: '17px',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.custom.general.icon
        : theme.palette.common.black,
    fontSize: theme.spacing(1.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  walletAvatar: {
    display: 'flex',
    position: 'relative',
  },
  walletLabel: {
    fontSize: theme.spacing(1.5),
    fontWeight: 590,
    lineHeight: '17px',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.custom.fonts.fontFive
        : theme.palette.common.black,
    overflow: 'auto',
    flexWrap: 'wrap',
    overflowWrap: 'anywhere',
    maxHeight: '70px',
    padding: theme.spacing(0, 2),
  },
  walletAddress: {
    color: theme.palette.custom.general.icon,
  },
  copyIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    fill: 'none',
    width: theme.spacing(2),
    padding: theme.spacing(0.7, 0.5),
    display: 'inline-flex',
    overflow: 'visible',
  },
  avatar: {
    height: '45px',
    width: '45px',
  },
  greenDot: {
    height: theme.spacing(1.3),
    width: theme.spacing(1.3),
    backgroundColor: `${theme.palette.custom.wallet.active} !important`,
    borderRadius: 50,
    display: 'flex',
    position: 'absolute',
    left: '35px',
    top: '35px',
    border: `2px solid ${theme.palette.common.black}`,
  },
  redDot: {
    height: theme.spacing(1.3),
    width: theme.spacing(1.3),
    backgroundColor: theme.palette.custom.wallet?.inactive,
    borderRadius: 50,
    display: 'flex',
    position: 'absolute',
    left: '35px',
    top: '35px',
  },
  next: {
    height: theme.spacing(2),
    width: theme.spacing(2),
  },
}));

export const useStyles = () => styles();
