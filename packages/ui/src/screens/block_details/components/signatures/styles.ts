import { sharedStyles } from '@/styles/useSharedStyles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  ...sharedStyles(theme),
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
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
