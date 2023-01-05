import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  chart: {
    height: '285px',
    width: '100%',
    '& .yAxis .recharts-cartesian-axis-tick:first-child': {
      display: 'none',
    },
  },
}));

export default useStyles;
