import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .memo': {
      alignItems: 'flex-start',
      '& .label': {
        marginRight: theme.spacing(5),
      },
    },
  },
}));

export default useStyles;
