import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(1, 3),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '100%',
      '& .MuiTypography-h1': {
        lineHeight: 1,
        alignSelf: 'flex-end',
      },
    },
  },
  logo: {
    height: '50px',
    // width: '225px',
  },
  content: {
    width: '100%',
    background: theme.palette.custom.general.surfaceOne,
    marginTop: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('lg')]: {
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 0,
      width: '70%',
      padding: theme.spacing(1, 3),
      flexWrap: 'nowrap',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: theme.spacing(1),
    width: '100%',
    '& .label': {
      marginRight: theme.spacing(1),
    },
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      padding: 0,
      width: 'auto',
    },
  },
}));

export default useStyles;
