import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(0.5, 1),
          display: 'inline-block',
          color: theme.palette.custom.tags.zero,
          background: Color(theme.palette.custom.tags.zero).alpha(0.2).string(),
          '&:not(:last-child)': {
            marginRight: theme.spacing(1),
          },
          '& .MuiTypography-body1': {
            whiteSpace: 'nowrap',
          },
        },
        zero: {
          color: theme.palette.custom.tags.zero,
          background: Color(theme.palette.custom.tags.zero).alpha(0.2).string(),
        },
        one: {
          color: theme.palette.custom.tags.one,
          background: Color(theme.palette.custom.tags.one).alpha(0.2).string(),
        },
        two: {
          color: theme.palette.custom.tags.two,
          background: Color(theme.palette.custom.tags.two).alpha(0.2).string(),
        },
        three: {
          color: theme.palette.custom.tags.three,
          background: Color(theme.palette.custom.tags.three).alpha(0.2).string(),
        },
        four: {
          color: theme.palette.custom.tags.four,
          background: Color(theme.palette.custom.tags.four).alpha(0.2).string(),
        },
        five: {
          color: theme.palette.custom.tags.five,
          background: Color(theme.palette.custom.tags.five).alpha(0.2).string(),
        },
        six: {
          color: theme.palette.custom.tags.six,
          background: Color(theme.palette.custom.tags.six).alpha(0.2).string(),
        },
        seven: {
          color: theme.palette.custom.tags.seven,
          background: Color(theme.palette.custom.tags.seven).alpha(0.2).string(),
        },
        eight: {
          color: theme.palette.custom.tags.eight,
          background: Color(theme.palette.custom.tags.eight).alpha(0.2).string(),
        },
      });
    },
  )();

  return styles;
};
