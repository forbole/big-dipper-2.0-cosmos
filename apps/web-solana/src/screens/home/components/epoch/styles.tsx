import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        content: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        },
        label: {
          marginBottom: theme.spacing(2),
        },
        chart: {
          '& .recharts-radial-bar-background-sector': {
            fill: Color(theme.palette.custom.primaryData.three).alpha(0.4).toString(),
          },
          '& .recharts-radial-bar-label': {
            display: 'none',
          },
        },
        chartPercentLabel: {
          fontSize: '2rem',
          color: theme.palette.custom.fonts.fontOne,
        },
        chartLabel: {
          fontSize: '1rem',
          color: theme.palette.custom.fonts.fontOne,
        },
        time: {
          textAlign: 'center',
          '& .highlight': {
            color: theme.palette.custom.fonts.highlight,
          },
        },

      });
    },
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
