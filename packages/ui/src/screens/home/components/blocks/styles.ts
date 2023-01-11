import { sharedStyles } from '@/styles/useSharedStyles';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  ...sharedStyles(theme),
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .button': {
      color: theme.palette.custom.fonts.fontTwo,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  label: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreFooter: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
