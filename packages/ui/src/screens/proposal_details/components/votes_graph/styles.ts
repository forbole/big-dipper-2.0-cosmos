import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
    },
    position: 'relative',
  },
  pie: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  legend: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      flex: 1,
      marginLeft: theme.spacing(4),
    },
  },
  total: {
    [theme.breakpoints.up('md')]: {
      gridColumn: '1/3',
    },
  },
  popOver: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  voteItem: {
    position: 'relative',
    paddingLeft: '10px',
    '&::before': {
      content: '""',
      display: 'block',
      width: '5px',
      background: 'pink',
      height: '100%',
      position: 'absolute',
      borderRadius: theme.shape.borderRadius,
      left: 0,
    },
    '&.yes': {
      '&::before': {
        background: theme.palette.custom.charts.one,
      },
    },
    '&.no': {
      '&::before': {
        background: theme.palette.custom.charts.four,
      },
    },
    '&.veto': {
      '&::before': {
        background: theme.palette.custom.charts.three,
      },
    },
    '&.abstain': {
      '&::before': {
        background: theme.palette.custom.charts.two,
      },
    },
  },
}));

export default useStyles;
