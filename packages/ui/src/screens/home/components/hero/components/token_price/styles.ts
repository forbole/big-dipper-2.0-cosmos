import { makeStyles, useTheme } from '@material-ui/core/styles';

const styles = makeStyles(
  () => ({
    chart: {
      height: '285px',
      width: '100%',
      '& .yAxis .recharts-cartesian-axis-tick:first-child': {
        display: 'none',
      },
    },
  }),
  { index: 1 }
);

export const useStyles = () => ({
  classes: styles(),
  theme: useTheme(),
});
