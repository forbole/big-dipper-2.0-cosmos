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
  rewardsTitle: {
    padding: '16px 24px 0 24px',
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
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  iconStaking: {
    padding: 0,
    minWidth: 'min-content',
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1),
    '> svg > path ': {
      fill: '#FFFFFF',
    },
  },
  iconRewards: {
    padding: 0,
    minWidth: 'min-content',
    border: `1px solid ${theme.palette.custom.tags.one}`,
    borderRadius: theme.spacing(1),
    '> svg > path': {
      fill: theme.palette.custom.tags.one,
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
    '> svg': {
      fill: '#FFFFFF',
    },
    background: theme.palette.primary.main,
    borderRadius: '4px',
    width: '86px',
    height: '32px',
    '> p': {
      fontWeight: 700,
    },
    justifyContent: 'center',
    '&.Mui-disabled': {
      opacity: '50%',
    },
  },
  stakingButton: {
    display: 'flex',
  },
  stakingMenu: {
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.divider,
    },
    '& .MuiMenuItem-root': {
      fontWeight: 900,
      padding: theme.spacing(1, 2),
    },
  },
  claimRewardsBox: {
    paddingLeft: '16px',
  },
  claimRewardsButton: {
    padding: '6px 16px',
    alignItems: 'center',
    border: '1px solid #007FFF',
    color: '#007FFF',
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet?.surfaceFour,
    },
    fontFamily: 'SF Pro',
    '> h5': {
      fontWeight: 700,
    },
    lineHeight: '17px',
    display: 'flex',
    letterSpacing: '-0.002em',
    '&.Mui-disabled': {
      color: '#007FFF',
      opacity: '50%',
      '> h5': {
        fontWeight: 700,
      },
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  label: {
    color: '#FFFFFF',
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
  redelegateContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px',
  },
  amountLabel: {
    display: 'inline',
    fontFamily: 'Helvetica Neue',
  },
  amountButton: {
    margin: theme.spacing(0, 0, 0, 1),
    color: theme.palette.custom.tags.one,
    fontWeight: 900,
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet?.surfaceFour,
    },
    '&.Mui-disabled': {
      color: theme.palette.custom.tags.one,
      opacity: '80%',
    },
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
    '> h5': {
      fontWeight: 800,
    },
    '&.Mui-disabled': {
      opacity: '50%',
      '&:hover': {
        cursor: 'default',
        background: theme.palette.primary.main,
      },
    },
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
    maxWidth: 'fit-content',
    '&': {
      flex: `1 1 auto`,
      color: theme.palette.custom.fonts.highlight,
    },
  },
  avatarText: {
    maxWidth: '100%',
    '&': {
      flex: `1 1 auto`,
      color: theme.palette.custom.fonts.highlight,
    },
  },
  validatorOptionSpan: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(1),
    flexFlow: 'row nowrap',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  checklistItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.custom.fonts.highlight,
    '> svg': {
      fill: 'transparent',
      marginRight: theme.spacing(1),
    },
  },
  checkbox: {
    '&.Mui-checked': {
      '& svg': {
        color: theme.palette.primary.main,
      },
    },
  },
  amountSubLabel: {
    padding: 0,
    fontWeight: 600,
    letterSpacing: '0.005rem',
    color: theme.palette.text.secondary,
    fontFamily: 'Helvetica Neue',
  },
  popper: {
    marginTop: `-${theme.spacing(2)} !important`,
  },
  tooltip: {
    maxWidth: 'none',
  },
  dropdownListItem: {
    width: '95%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tooltipIcon: {
    svg: {
      fill: 'transparent',
    },
  },
}));

export default useStyles;
