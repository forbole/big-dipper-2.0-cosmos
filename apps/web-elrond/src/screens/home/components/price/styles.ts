import { makeStyles, useTheme } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
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
  };
});

export const useStyles = () => {
  return {
    classes: styles(),
    theme: useTheme(),
  };
};
