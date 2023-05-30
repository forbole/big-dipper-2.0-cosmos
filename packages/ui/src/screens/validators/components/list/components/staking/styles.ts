import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  amountSubtitle: {
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
    justifyContent: 'right',
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
  errorMsg: {
    color: theme.palette.custom.results.fail,
    fontWeight: '550',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    overflowWrap: 'anywhere',
    paddingTop: '16px',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '330px',
      height: '330px',
      backgroundColor: theme.palette.custom.wallet.backgroundTwo,
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
  header: {
    paddingTop: '20px',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: 700,
    fontFamily: 'Helvetica Neue',
  },
  subtitle: {
    fontSize: '16px',
    lineHeight: '32px',
    paddingTop: '10px',
    paddingBottom: '5px',
    fontWeight: 500,
    letterSpacing: '0.005rem',
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
  staking: {
    zIndex: 150,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.primary.main,
    },
    '& .text': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    background: theme.palette.primary.main,
    borderRadius: '4px',
    width: '86px',
    height: '32px',
    justifyContent: 'center',
  },
  stakingButton: {
    display: 'flex',
  },
  label: {
    color: '#FFFFFF',
  },
  root2: {
    borderRadius: '4px',
    [`& fieldset`]: {
      borderRadius: 0,
    },
  },
  textField: {
    '& .MuiInputBase-root': {
      borderRadius: `4px`,
    },
  },
  delegateSubtitle: {
    display: 'inline-flex',
    float: 'right',
  },
  ddd: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  amountLabel: {
    color: theme.palette.custom.tags.one,
    display: 'inline',
    paddingLeft: '10px',
  },
  dialogActions: {
    display: 'flex',
    position: 'relative',
    bottom: '19px',
    right: '16px',
  },
  delegateButton: {
    display: 'flex',
    flexDirection: 'row',
    padding: '6px 16px',
    width: '100px',
    height: '32px',
    background: theme.palette.primary.main,
    borderRadius: '4px',
    color: theme.palette.custom.wallet.textSecondary,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.primary.main,
    },
    [theme.breakpoints.up('md')]: {
      width: '107px',
      height: '32px',
    },
    [theme.breakpoints.down('xs')]: {
      left: '54px',
    },
  },
  commissionLabel: {
    fontSize: '12px',
    paddingLeft: '36px',
    display: 'flex',
    color: '#9D9D9D',
    marginTop: '-4px',
  },
  commissionValue: {
    fontSize: '12px',
    paddingLeft: '5px',
  },
  validatorAvatar: {
    fontSize: '16px',
    paddingTop: '10px',
  },
  validatorCard: {
    border: '1px solid #292829',
    borderRadius: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
  },
  validatorOption: {
    padding: theme.spacing(1, 1.5),
  },
  avatar: {
    '&': {
      flex: `0 0 ${theme.spacing(3.5)}`,
    },
    marginRight: theme.spacing(1),
  },
  text: {
    '&': {
      flex: `1 1 auto`,
      color: theme.palette.custom.fonts.highlight,
    },
  },
  validatorOptionSpan: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(1),
    flexFlow: 'row nowrap',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
