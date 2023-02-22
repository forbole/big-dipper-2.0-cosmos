import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    // flexDirection: 'column',
    overflow: 'auto',
  },
  content: {
    // flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // flexDirection: 'column',
    placeSelf: 'start center',
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  chart: {
    '& .recharts-radial-bar-background-sector': {
      fill: Color(theme.palette.primary.main).alpha(0.4).toString(),
    },
  },
  chartPercentLabel: {
    fontSize: '2rem',
    fill: theme.palette.custom.fonts.fontOne,
  },
  chartExtraLabel: {
    fill: theme.palette.custom.fonts.fontTwo,
  },
  chartLabel: {
    fontSize: '1rem',
    color: theme.palette.custom.fonts.fontOne,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100%',
    color: theme.palette.custom.fonts.fontTwo,
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      '& > *': {
        width: '50%',
      },
    },
    '& .values': {
      textOverflow: 'ellipses',

      '& .height': {
        color: theme.palette.custom.fonts.fontOne,
      },
    },
    '& .label': {
      color: theme.palette.custom.fonts.fontThree,
      marginBottom: theme.spacing(0.5),
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: 0,
    },
  },
}));

export default useStyles;
