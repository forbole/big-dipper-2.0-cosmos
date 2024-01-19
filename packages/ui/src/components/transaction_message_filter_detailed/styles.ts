import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
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
  },
  header: {
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
    },
  },
  moduleName: {
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
  },
  msgType: {
    display: 'flex',
  },
  checkbox: {
    marginRight: '8px',
  },
}));

export default useStyles;
