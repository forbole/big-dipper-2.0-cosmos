import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (percentage: number) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-body1': {
            color: theme.palette.custom.fonts.fontTwo,
          },
        },
        chart: {
          display: 'flex',
          height: '2px',
          borderRadius: theme.shape.borderRadius,
          background: theme.palette.custom.chartData.five,
          overflow: 'hidden',
        },
        active: {
          width: `${percentage}%`,
          background: theme.palette.custom.chartData.one,
        },
      });
    },
  )();

  return styles;
};
