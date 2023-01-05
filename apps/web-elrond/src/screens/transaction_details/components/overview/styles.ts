import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  shard: {
    color: theme.palette.custom.fonts.fontFour,
    marginLeft: theme.spacing(0.5),
  },
}));

export default useStyles;
