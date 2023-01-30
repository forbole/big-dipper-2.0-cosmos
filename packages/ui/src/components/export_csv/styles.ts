import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  button: {
    fontSize: theme.spacing(2),
    '& svg': {
      fill: theme.palette.common.white,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;
