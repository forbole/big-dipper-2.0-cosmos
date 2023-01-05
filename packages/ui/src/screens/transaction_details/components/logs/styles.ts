import { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    overflow: 'hidden',
  },

  header: {
    paddingBottom: theme.spacing(2),
  },

  pre: {
    maxHeight: '400px',
    overflow: 'auto',
    padding: '1rem',
    margin: '0',
    background: theme.palette.background.default,
    flex: 1,
    '& code': {
      whiteSpace: 'pre-wrap',
    },
  },
}));

export default useStyles;
