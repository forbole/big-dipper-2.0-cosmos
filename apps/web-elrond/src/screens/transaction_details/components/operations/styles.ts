import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
