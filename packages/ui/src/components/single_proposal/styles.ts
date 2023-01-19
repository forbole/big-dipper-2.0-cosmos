import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '50px auto min-content',
      gap: theme.spacing(2),
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up('lg')]: {
      alignItems: 'flex-start',
      marginBottom: 0,
    },
  },
  content: {
    marginBottom: theme.spacing(2),
  },
  id: {
    color: theme.palette.custom.fonts.fontThree,
  },
  title: {
    marginBottom: theme.spacing(0.5),
  },
  infoWrapper: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      '& > *': {
        marginRight: theme.spacing(10),
      },
    },
  },
  item: {
    marginBottom: theme.spacing(2),
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
  status: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
