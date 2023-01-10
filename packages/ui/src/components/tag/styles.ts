import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
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
  nine: {
    color: theme.palette.custom.tags.nine,
    background: Color(theme.palette.custom.tags.nine).alpha(0.2).string(),
  },
  ten: {
    color: theme.palette.custom.tags.ten,
    background: Color(theme.palette.custom.tags.ten).alpha(0.2).string(),
  },
  eleven: {
    color: theme.palette.custom.tags.eleven,
    background: Color(theme.palette.custom.tags.eleven).alpha(0.2).string(),
  },
  twelve: {
    color: theme.palette.custom.tags.twelve,
    background: Color(theme.palette.custom.tags.twelve).alpha(0.2).string(),
  },
  thirteen: {
    color: theme.palette.custom.tags.thirteen,
    background: Color(theme.palette.custom.tags.thirteen).alpha(0.2).string(),
  },
  fourteen: {
    color: theme.palette.custom.tags.fourteen,
    background: Color(theme.palette.custom.tags.fourteen).alpha(0.2).string(),
  },
  fifteen: {
    color: theme.palette.custom.tags.fifteen,
    background: Color(theme.palette.custom.tags.fifteen).alpha(0.2).string(),
  },
  sixteen: {
    color: theme.palette.custom.tags.sixteen,
    background: Color(theme.palette.custom.tags.sixteen).alpha(0.2).string(),
  },
  seventeen: {
    color: theme.palette.custom.tags.seventeen,
    background: Color(theme.palette.custom.tags.seventeen).alpha(0.2).string(),
  },
  eighteen: {
    color: theme.palette.custom.tags.eighteen,
    background: Color(theme.palette.custom.tags.eighteen).alpha(0.2).string(),
  },
  nineteen: {
    color: theme.palette.custom.tags.nineteen,
    background: Color(theme.palette.custom.tags.nineteen).alpha(0.2).string(),
  },
  twenty: {
    color: theme.palette.custom.tags.twenty,
    background: Color(theme.palette.custom.tags.twenty).alpha(0.2).string(),
  },
}));

export default useStyles;
