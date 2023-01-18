import { sharedStyles } from '@/styles/useSharedStyles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  ...sharedStyles(theme),
  paginate: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;
