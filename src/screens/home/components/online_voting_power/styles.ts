import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = (percentage: number | string) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        data: {
          display: 'flex',
          alignItems: 'flex-end',
          '& .primary__data': {
            color: theme.palette.primary.main,
            marginRight: theme.spacing(2),
            fontSize: '2.5rem',
          },
        },
        chart: {
          display: 'flex',
          height: '11px',
          borderRadius: theme.shape.borderRadius,
          background: Color(theme.palette.primary.main).alpha(0.2).string(),
          overflow: 'hidden',
          margin: theme.spacing(2, 0),
        },
        active: {
          width: `${percentage}%`,
          background: theme.palette.primary.main,
          transition: '0.3s',
        },
        itemsContainer: {
          [theme.breakpoints.up('lg')]: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          },
        },
        item: {
          '&:not(:last-child)': {
            marginBottom: theme.spacing(2),
          },
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
            '& .positive': {
              color: theme.palette.custom.tags.one,
            },
            '& .negative': {
              color: theme.palette.custom.tags.three,
            },
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },

          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
