import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .label': {
      color: theme.palette.custom.fonts.fontThree,
    },
    '& .content': {
      marginBottom: theme.spacing(2),
      display: 'block',
      [theme.breakpoints.up('lg')]: {
        display: 'flex',
      },
    },
    '& .recipient': {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up('lg')]: {
        display: 'block',
      },
    },
    '& .amountRequested': {
      marginBottom: theme.spacing(2),
      display: 'block',
      padding: '0',
      [theme.breakpoints.up('lg')]: {
        display: 'block',
        paddingLeft: '30px',
      },
    },
    '& .accordion': {
      background: '#151519',
    },
  },
  content: {
    marginTop: theme.spacing(2),
    display: 'grid',
    p: {
      lineHeight: 1.8,
    },
    '& ul': {
      padding: '0.25rem 0.5rem',
      [theme.breakpoints.up('lg')]: {
        padding: '0.5rem 1rem',
      },
    },
    '& li': {
      padding: '0.25rem 0.5rem',
      [theme.breakpoints.up('lg')]: {
        padding: '0.5rem 1rem',
      },
    },
    '& > *': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        marginBottom: theme.spacing(2),
      },
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '200px auto',
    },
  },
  time: {
    marginTop: theme.spacing(2),
    display: 'grid',
    '& > *': {
      marginBottom: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(2),
      },
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export default useStyles;
