import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const defaultTheme = useTheme();
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: 'center',
          },
        },
        pie: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        legend: {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridGap: theme.spacing(2),
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            flex: 1,
            marginLeft: theme.spacing(4),
          },
        },
        total: {
          [theme.breakpoints.up('md')]: {
            gridColumn: '1/3',
          },
        },
        voteItem: {
          position: 'relative',
          paddingLeft: '10px',
          '&::before': {
            content: '""',
            display: 'block',
            width: '5px',
            background: 'pink',
            height: '100%',
            position: 'absolute',
            borderRadius: theme.shape.borderRadius,
            left: 0,

          },
          '&.yes': {
            '&::before': {
              background: theme.palette.custom.charts.one,
            },
          },
          '&.no': {
            '&::before': {
              background: theme.palette.custom.charts.two,
            },
          },
          '&.veto': {
            '&::before': {
              background: theme.palette.custom.charts.three,
            },
          },
          '&.abstain': {
            '&::before': {
              background: theme.palette.custom.charts.four,
            },
          },
        },
      });
    },
  )();

  return {
    classes: styles,
    theme: defaultTheme,
  };
};
