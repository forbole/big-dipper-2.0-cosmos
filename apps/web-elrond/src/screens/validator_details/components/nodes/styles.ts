import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;
