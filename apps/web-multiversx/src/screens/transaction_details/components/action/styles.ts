import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  description: {
    alignItems: 'flex-start',
    '& .label': {
      marginRight: theme.spacing(2),
    },
    '& .detail': {
      wordBreak: 'break-all',
    },
  },
}));

export default useStyles;
