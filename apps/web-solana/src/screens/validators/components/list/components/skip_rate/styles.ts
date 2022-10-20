import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (percentage: string) => {
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
          background: theme.palette.custom.chartData.two,
        },
        active: {
          width: `${percentage}%`,
          background: theme.palette.custom.chartData.one,
        },
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: theme.spacing(1),
          '& .percentage': {
            color: theme.palette.custom.fonts.skipOne,
          },
          [theme.breakpoints.up('lg')]: {
            marginBottom: 0,
          },
        },
      });
    },
  )();

  return styles;
};
