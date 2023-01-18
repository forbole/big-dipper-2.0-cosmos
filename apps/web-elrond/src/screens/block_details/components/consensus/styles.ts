import { makeStyles } from 'tss-react/mui';
import { sharedStyles } from 'ui/src/styles/useSharedStyles';

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
}));

export default useStyles;
