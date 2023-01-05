import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    color: theme.palette.custom.fonts.highlight,
    wordBreak: 'break-all',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
