import { makeStyles, useTheme } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return {
        chart: {
          height: '285px',
          width: '100%',
          '& .yAxis .recharts-cartesian-axis-tick:first-child': {
            display: 'none',
          },
        },
      };
    },
    { index: 1 }
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
