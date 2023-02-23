import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .eligible': {
      color: theme.palette.custom.primaryData.four,
    },
  },
}));

export default useStyles;
