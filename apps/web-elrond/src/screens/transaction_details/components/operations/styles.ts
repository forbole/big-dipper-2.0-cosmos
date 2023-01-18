import { makeStyles } from 'tss-react/mui';
import { sharedStyles } from 'ui/src/styles/useSharedStyles';

const useStyles = makeStyles()((theme) => ({
  ...sharedStyles(theme),
  root: {
    overflow: 'auto',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

export default useStyles;
