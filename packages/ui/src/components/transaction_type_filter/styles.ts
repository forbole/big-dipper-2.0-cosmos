import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  checkBox: {
    height: '16px',
    marginTop: '0.5px',
    marginRight: '8px',
    width: '16px',
    '& svg': {
      height: '16px',
      width: '16px',
    },
  },
  column: {
    flexBasis: 'calc(50% - 20px)',
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dialog: {
    zIndex: '1',
    '& .MuiDialog-paper': {
      borderRadius: '8px',
      height: '650px',
      width: '500px',
    },
  },
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '30px',
    paddingTop: '30px',
    '& .MuiButtonBase-root': {
      padding: 0,
    },
  },
  icon: {
    '& svg': {
      fill: theme.palette.custom.general.icon,
      '& path': {
        fill: theme.palette.custom.general.icon,
      },
    },
    display: 'inline-flex',
    marginLeft: theme.spacing(5),
    position: 'absolute',
    width: '20px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  loading: {
    marginTop: theme.spacing(25),
  },
  moduleName: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(3),
    '& .MuiTypography-root': {
      color: theme.palette.primary.main,
      display: 'flex',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 590,
      letterSpacing: '-0.544px',
      lineHeight: '20px',
      textTransform: 'capitalize',
    },
  },
  moduleNameTypography: {
    display: 'flex',
    fontSize: '16px',
  },
  msgLabel: {
    color: theme.palette.text.secondary,
    display: 'flex',
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.024px',
    lineHeight: '19.09px',
  },
  msgOption: {
    color: theme.palette.custom.fonts.fontFour,
    display: 'flex',
    fontFamily: 'Helvetica Neue',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: '0.024px',
  },
  msgType: {
    display: 'flex',
    paddingBottom: theme.spacing(0.5),
  },
  selectAll: {
    alignItems: 'center',
    display: 'flex',
    left: '401px',
    position: 'absolute',
    top: '70px',
    '& .MuiTypography-root': {
      color: theme.palette.text.secondary,
      display: 'flex',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 400,
      letterSpacing: '-0.544px',
      lineHeight: '16px',
      textTransform: 'capitalize',
    },
    '& svg': {
      height: '16px',
      marginRight: '8px',
      marginTop: '-3px',
      width: '16px',
    },
  },
  selectAllText: {
    marginRight: '10px',
  },
  title: {
    alignItems: 'center',
    display: 'flex',
  },
}));

export default useStyles;
