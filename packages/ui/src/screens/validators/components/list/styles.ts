import { sharedStyles } from '@/styles/useSharedStyles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  ...sharedStyles(theme),
  list: {
    minHeight: '500px',
    height: '50vh',
    [theme.breakpoints.up('lg')]: {
      minHeight: '65vh',
    },
  },
}));

export default useStyles;
