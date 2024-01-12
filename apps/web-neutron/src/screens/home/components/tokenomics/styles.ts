import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: theme.palette.custom.fonts.fontThree,
    backgroundColor: theme.palette.custom.general.surfaceTwo,
    borderRadius: '8px',
    marginBottom: theme.spacing(3),
  },
}));

export default useStyles;
