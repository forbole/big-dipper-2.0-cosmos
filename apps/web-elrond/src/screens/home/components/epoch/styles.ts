import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  chart: {
    '& .recharts-radial-bar-background-sector': {
      fill: Color(theme.palette.custom.primaryData.one).alpha(0.4).toString(),
    },
  },
  chartPercentLabel: {
    fontSize: '2rem',
    fill: theme.palette.custom.fonts.fontOne,
  },
  chartLabel: {
    fontSize: '1rem',
    fill: theme.palette.custom.fonts.fontThree,
  },
  time: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.custom.fonts.fontThree,
  },
}));

export default useStyles;
