import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(1),
    flexFlow: 'row nowrap',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  avatar: {
    '&': {
      flex: `0 0 ${theme.spacing(3.5)}`,
    },
  },
  text: {
    '&': {
      flex: `1 1 auto`,
      color: theme.palette.custom.fonts.highlight,
    },
  },
  popper: {
    marginTop: `-${theme.spacing(2)} !important`,
  },
  tooltip: {
    maxWidth: 'none',
  },
}));

export default useStyles;
