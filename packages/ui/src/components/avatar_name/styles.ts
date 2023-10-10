import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.spacing(1),
    flexFlow: 'row nowrap',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  noLink: {
    '&&': {
      cursor: 'default',
      color: theme.palette.custom.fonts.fontOne,
      '&:hover': {
        cursor: 'default',
      },
    },
  },
  avatar: {
    flex: `0 0 ${theme.spacing(3.5)}`,
  },
  text: {
    flex: `1`,
    color: theme.palette.custom.fonts.highlight,
  },
  popper: {
    marginTop: `-${theme.spacing(2)} !important`,
  },
  tooltip: {
    maxWidth: 'none',
  },
}));

export default useStyles;
