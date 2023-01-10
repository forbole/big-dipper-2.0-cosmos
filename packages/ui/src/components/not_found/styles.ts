import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '400px',
    height: '100%',
    '& .MuiTypography-body1': {
      marginTop: theme.spacing(2),
      color: theme.palette.custom.fonts.fontFour,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
  },
}));

export default useStyles;
