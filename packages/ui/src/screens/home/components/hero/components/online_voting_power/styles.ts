import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles<{ percentage: number | string }>()((theme, { percentage }) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 3fr',
    height: '100%',
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
  },
  data: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .primary__data': {
      color: theme.palette.primary.main,
      marginRight: theme.spacing(2),
      fontSize: '2.5rem',
    },
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  chart: {
    display: 'flex',
    height: '11px',
    borderRadius: theme.shape.borderRadius,
    background: Color(theme.palette.primary.main).alpha(0.2).string(),
    overflow: 'hidden',
    margin: theme.spacing(2, 0),
  },
  active: {
    width: `${percentage}%`,
    background: theme.palette.primary.main,
    transition: '0.3s',
  },
  itemsContainer: {
    [theme.breakpoints.up('md')]: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(2 1fr)',
      gap: theme.spacing(1),
    },
  },
  item: {
    // '&:not(:last-child)': {
    //   marginBottom: theme.spacing(2),
    // },
    '& .label': {
      // marginBottom: theme.spacing(1),
      color: theme.palette.custom.fonts.fontThree,
    },
    '& p.value': {
      color: theme.palette.custom.fonts.fontOne,
      fontWeight: theme.typography.fontWeightBold,
      '& .positive': {
        color: theme.palette.custom.tags.one,
      },
      '& .negative': {
        color: theme.palette.custom.tags.three,
      },
    },
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },

    [theme.breakpoints.up('md')]: {
      display: 'grid',
      placeItems: 'start',
      // alignItems: 'center',
      // justifyContent: 'space-between',
    },
  },
}));

export default useStyles;
