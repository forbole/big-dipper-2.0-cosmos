import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
  },
  body: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  },
  item: {
    overflow: 'hidden',
    '& .item__key': {
      color: theme.palette.custom.fonts.fontThree,
    },
    '& .item__value--status': {
      color: theme.palette.custom.fonts.fontFour,
    },
  },
  hash: {
    display: 'flex',
  },
  bullet: {
    width: '3px',
    borderRadius: '20%',
    background: theme.palette.custom.primaryData.two,
    marginRight: theme.spacing(1),
  },
}));

export default useStyles;
