import { makeStyles } from 'tss-react/mui';

const styles = makeStyles()((theme) => ({
  actions: {
    display: 'flex',
    position: 'relative',
    bottom: '19px',
    right: '16px',
  },
  actionsButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px 16px',
    width: '103px',
    height: '40px',
    background: theme.palette.custom.wallet?.surfaceTwo,
    borderRadius: '8px',
    color: theme.palette.custom.wallet?.textPrimary,
    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      width: '114px',
      height: '44px',
    },
    [theme.breakpoints.down('xs')]: {
      left: '54px',
    },
  },
  logInButton: {
    background: theme.palette.custom.primaryData.one,
    height: theme.spacing(4),
    borderRadius: theme.spacing(0.5),
    fontWeight: 600,
    fontSize: theme.spacing(1.75),
    color: theme.palette.common.white,
    padding: theme.spacing(1.5),
    '& .MuiButton-startIcon': {
      marginRight: 1,
    },
    '& svg': {
      fill: 'none',
      color: theme.palette.common.white,
      stroke: theme.palette.common.white,
      strokeWidth: '1.6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      height: theme.spacing(2.5),
      width: theme.spacing(2.5),
      '& path': {
        stroke: theme.palette.common.white,
      },
    },
  },
  avatar: {
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
  closeButton: {
    position: 'absolute',
    right: '24px',
    top: '16px',
    color: theme.palette.grey[500],
    [theme.breakpoints.down('xs')]: {
      left: '250px',
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '330px',
      height: '330px',
      backgroundColor: theme.palette.custom.wallet?.backgroundTwo,
      [theme.breakpoints.up('md')]: {
        width: '561px',
        height: '550px',
      },
    },
  },
  dialogContent: {
    display: 'inline-flex',
    alignSelf: 'center',
    marginTop: '10px',
    [theme.breakpoints.up('md')]: {
      marginTop: '70px',
    },
  },
  dialogContentButton: {
    padding: '8px',
  },
  errorMsg: {
    color: theme.palette.custom.results.fail,
    fontWeight: '550',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    overflowWrap: 'anywhere',
  },
  header: {
    paddingTop: '20px',
  },
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
      stroke: theme.palette.custom.general.icon,
      strokeWidth: '1.6',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
  },
  loginSuccessIcon: {
    position: 'relative',
    left: '95px',
    fill: 'none',
    stroke: theme.palette.primary.main,
    strokeWidth: '4',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    [theme.breakpoints.up('md')]: {
      top: '95px',
      left: '210px',
    },
  },
  loading: {
    height: '150px',
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
  },
  loadingText: {
    fontWeight: '550',
    position: 'relative',
    textAlign: 'center',
    bottom: '60px',
    [theme.breakpoints.up('md')]: {
      bottom: '103px',
    },
  },
  msgContent: {
    display: 'flex',
    position: 'absolute',
    top: '185px',
    left: '172px',
  },
  msgHeader: {
    fontWeight: 700,
    lineHeight: '160%',
    letterSpacing: '0.15px',
    display: 'flex',
    textAlign: 'left',
  },
  qrCode: {
    border: 'solid 10px #FFFFFF',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    [theme.breakpoints.up('md')]: {
      border: 'solid 21px #FFFFFF',
      position: 'absolute',
      left: '166px',
      top: '160px',
    },
  },
  qrContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: '12px',
    lineHeight: '30px',
    paddingTop: '5px',
    fontWeight: 400,
    letterSpacing: '0.005rem',
    color: theme.palette.text.secondary,
    fontFamily: 'Helvetica Neue',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
  },
  title: {
    display: 'flex',
    fontSize: '16px',
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  walletButton: {
    border: 'solid 1px',
    borderColor: theme.palette.custom.wallet?.surfaceFour,
    borderRadius: '24px',
    width: '120px',
    height: '120px',
    display: 'flex',
    padding: '16px',
    justifyContent: 'center',
    '&:hover': {
      background:
        theme.palette.mode === 'dark'
          ? theme.palette.custom.wallet?.surfaceFour
          : theme.palette.common.white,
      borderColor: theme.palette.custom.wallet?.surfaceFour,
    },
    [theme.breakpoints.up('md')]: {
      borderRadius: '24px',
      width: '153px',
      height: '152px',
    },
    color: theme.palette.custom.wallet?.surfaceTwo,
  },
  walletConnectLabel: {
    fontSize: '14px',
    lineHeight: '17px',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    fontStyle: 'normal',
    fontWeight: 590,
    letterSpacing: '-0.002em',
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.common.white
        : theme.palette.custom.wallet?.surfaceFour,
    '&:hover': {
      color:
        theme.palette.mode === 'dark'
          ? theme.palette.common.white
          : theme.palette.custom.wallet?.surfaceTwo,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '4px',
    },
  },
  walletDetailsButton: {
    opacity: 0,
    visibility: 'hidden',
    transition: '0.2s ease-in-out',
    position: 'fixed',
    right: 60,
    '&.open': {
      opacity: 1,
      visibility: 'visible',
      background: theme.palette.custom.wallet?.backgroundTwo,
      borderRadius: '8px',
    },
  },
  walletIcon: {
    display: 'inline-table',
  },
  connectWallet: {
    [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: '3px',
      right: '15px',
    },
  },
  warningMsg: {},
}));

export const useStyles = () => styles();
