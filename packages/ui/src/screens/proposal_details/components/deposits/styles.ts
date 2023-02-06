import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'hidden',
  },
  list: {
    flex: 1,
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
