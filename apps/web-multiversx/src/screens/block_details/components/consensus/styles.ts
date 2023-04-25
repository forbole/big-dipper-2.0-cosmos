import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTypography-h2': {
      paddingBottom: theme.spacing(2),
    },
  },
  wrapper: {
    flex: 1,
  },
}));

export default useStyles;
