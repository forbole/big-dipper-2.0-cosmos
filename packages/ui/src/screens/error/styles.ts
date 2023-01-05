import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    minHeight: '100vh',
    padding: theme.spacing(6),
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
    '& .details': {
      marginBottom: theme.spacing(5),
    },
    '& .container': {
      maxWidth: '600px',
    },
  },
}));

export default useStyles;
