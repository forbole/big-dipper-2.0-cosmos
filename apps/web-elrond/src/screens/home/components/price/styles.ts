import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  root: {},
  label: {
    marginBottom: theme.spacing(2),
  },
  chart: {
    height: '290px',
    width: '100%',
    '& .yAxis .recharts-cartesian-axis-tick:first-child': {
      display: 'none',
    },
  },
}));

export const useStyles = () => ({
  classes: styles(),
  theme: useTheme(),
});
