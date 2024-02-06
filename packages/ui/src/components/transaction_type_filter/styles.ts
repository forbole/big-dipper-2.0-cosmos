import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  icon: {
    display: 'inline-flex',
    position: 'absolute',
    marginLeft: theme.spacing(5),
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: theme.palette.custom.general.icon,
      '& path': {
        fill: theme.palette.custom.general.icon,
      },
    },
    width: '20px',
  },
  header: {
    paddingTop: '30px',
    paddingBottom: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiButtonBase-root': {
      padding: 0,
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '500px',
      height: '650px',
      borderRadius: '8px',
    },
    zIndex: '1',
  },
  moduleName: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    '& .MuiTypography-root': {
      display: 'flex',
      color: 'rgba(255, 131, 91, 1)',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 590,
      lineHeight: '20px',
      letterSpacing: '-0.544px',
      textTransform: 'capitalize',
    },
  },
  moduleNameTypography: {
    display: 'flex',
    paddingTop: theme.spacing(1.25),
    color: 'rgba(255, 131, 91, 1)',
    fontFamily: 'SF Pro',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 590,
    lineHeight: '20px',
    letterSpacing: '-0.544px',
    textTransform: 'capitalize',
  },
  msgOption: {
    color: theme.palette.custom.fonts.fontFour,
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.024px',
    display: 'flex',
  },
  msgLabel: {
    color: theme.palette.text.secondary,
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.024px',
    lineHeight: '19.09px',
    display: 'flex',
  },
  msgType: {
    display: 'flex',
    paddingBottom: theme.spacing(0.5),
  },
  checkBox: {
    height: '16px',
    width: '16px',
    marginTop: '0.5px',
    marginRight: '8px',
    '& svg': {
      height: '16px',
      width: '16px',
    },
  },
  selectAll: {
    display: 'flex',
    position: 'absolute',
    top: '70px',
    left: '401px',
    '& .MuiTypography-root': {
      display: 'flex',
      color: theme.palette.text.secondary,
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '-0.544px',
      textTransform: 'capitalize',
    },
    '& svg': {
      height: '16px',
      width: '16px',
      marginLeft: '8px',
      marginTop: '-3px',
    },
  },
}));

export default useStyles;
