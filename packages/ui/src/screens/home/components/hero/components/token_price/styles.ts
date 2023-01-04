import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

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
