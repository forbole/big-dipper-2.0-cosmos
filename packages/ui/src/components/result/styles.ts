import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.custom.fonts.fontTwo,
    gap: 4,
  },
  success: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.pass,
    },
  },
  fail: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.fail,
    },
  },
}));

export default useStyles;
