import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'hidden',
    [theme.breakpoints.up('md')]: {
      // display: 'flex',
      // flexDirection: 'column',
    },
  },
}));

export default useStyles;
