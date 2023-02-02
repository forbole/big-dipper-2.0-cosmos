import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
  },
  title: {
    // marginBottom: theme.spacing(2),
  },
  itemWrap: {
    '&:first-of-type': {
      marginTop: theme.spacing(2),
    },
    '&:last-child': {
      marginBottom: theme.spacing(2),
    },
    margin: theme.spacing(6, 0),
  },
  item: {
    marginBottom: theme.spacing(2),
    wordBreak: 'break-all',
    '& .label': {
      marginBottom: theme.spacing(1),
      color: theme.palette.custom.fonts.fontThree,
    },
    '& p.value': {
      color: theme.palette.custom.fonts.fontTwo,
    },
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
  desktopFlex: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      '& > div': {
        width: '50%',
      },
    },
  },
}));

export default useStyles;
