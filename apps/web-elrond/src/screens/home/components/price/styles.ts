import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {},
  label: {
    marginBottom: theme.spacing(2),
  },
  chart: {
    height: '290px',
    width: '100%',
    '& .yAxis .recharts-cartesian-axis-tick:first-of-type': {
      display: 'none',
    },
  },
}));

export default useStyles;
