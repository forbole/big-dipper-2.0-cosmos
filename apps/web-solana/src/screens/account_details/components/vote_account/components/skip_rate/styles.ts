import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = (percentage: string) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        actionsWrapper: {
          marginBottom: theme.spacing(3),
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          },
        },
        data: {
          display: 'flex',
          alignItems: 'flex-end',
          '& .primary__data': {
            color: theme.palette.custom.fonts.skipFour,
            marginRight: theme.spacing(2),
            fontSize: '2.5rem',
          },
        },
        options: {
          display: 'flex',
          marginTop: theme.spacing(2),
          '& .MuiButton-root': {
            border: `solid 1px ${theme.palette.custom.fonts.fontTwo}`,
            margin: theme.spacing(0, 1),
            '&:first-child': {
              marginLeft: 0,
            },
            '&:last-child': {
              marginRight: 0,
            },
          },

          '& .selected': {
            border: `solid 1px ${theme.palette.primary.main}`,
            background: Color(theme.palette.primary.main).alpha(0.5).string(),
          },

          [theme.breakpoints.up('md')]: {
            marginTop: 0,
          },
        },
        chart: {
          display: 'flex',
          height: '8px',
          borderRadius: theme.shape.borderRadius,
          background: theme.palette.custom.chartData.two,
          overflow: 'hidden',
        },
        active: {
          width: `${percentage}%`,
          background: theme.palette.custom.chartData.one,
          transition: '0.3s',
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
