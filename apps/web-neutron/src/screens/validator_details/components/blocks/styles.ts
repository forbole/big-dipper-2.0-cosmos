import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: theme.palette.custom.fonts.fontThree,
    backgroundColor: theme.palette.custom.general.surfaceTwo,
    borderRadius: '8px',
    height: '22vh',
  },
}));

export default useStyles;
