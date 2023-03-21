import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(0.5, 1),
    display: 'inline-block',
    color: theme.palette.custom.tags.zero,
    background:
      theme.palette.custom.tags_bg.zero ||
      Color(theme.palette.custom.tags.zero).alpha(0.2).string(),
    '&:not(:last-child)': {
      marginRight: theme.spacing(1),
    },
    '& .MuiTypography-body1': {
      whiteSpace: 'nowrap',
    },
  },
  zero: {
    color: theme.palette.custom.tags.zero,
    background:
      theme.palette.custom.tags_bg.zero ||
      Color(theme.palette.custom.tags.zero).alpha(0.2).string(),
  },
  one: {
    color: theme.palette.custom.tags.one,
    background:
      theme.palette.custom.tags_bg.one || Color(theme.palette.custom.tags.one).alpha(0.2).string(),
  },
  two: {
    color: theme.palette.custom.tags.two,
    background:
      theme.palette.custom.tags_bg.two || Color(theme.palette.custom.tags.two).alpha(0.2).string(),
  },
  three: {
    color: theme.palette.custom.tags.three,
    background:
      theme.palette.custom.tags_bg.three ||
      Color(theme.palette.custom.tags.three).alpha(0.2).string(),
  },
  four: {
    color: theme.palette.custom.tags.four,
    background:
      theme.palette.custom.tags_bg.four ||
      Color(theme.palette.custom.tags.four).alpha(0.2).string(),
  },
  five: {
    color: theme.palette.custom.tags.five,
    background:
      theme.palette.custom.tags_bg.five ||
      Color(theme.palette.custom.tags.five).alpha(0.2).string(),
  },
  six: {
    color: theme.palette.custom.tags.six,
    background:
      theme.palette.custom.tags_bg.six || Color(theme.palette.custom.tags.six).alpha(0.2).string(),
  },
  seven: {
    color: theme.palette.custom.tags.seven,
    background:
      theme.palette.custom.tags_bg.seven ||
      Color(theme.palette.custom.tags.seven).alpha(0.2).string(),
  },
  eight: {
    color: theme.palette.custom.tags.eight,
    background:
      theme.palette.custom.tags_bg.eight ||
      Color(theme.palette.custom.tags.eight).alpha(0.2).string(),
  },
  nine: {
    color: theme.palette.custom.tags.nine,
    background:
      theme.palette.custom.tags_bg.nine ||
      Color(theme.palette.custom.tags.nine).alpha(0.2).string(),
  },
  ten: {
    color: theme.palette.custom.tags.ten,
    background:
      theme.palette.custom.tags_bg.ten || Color(theme.palette.custom.tags.ten).alpha(0.2).string(),
  },
  eleven: {
    color: theme.palette.custom.tags.eleven,
    background:
      theme.palette.custom.tags_bg.eleven ||
      Color(theme.palette.custom.tags.eleven).alpha(0.2).string(),
  },
  twelve: {
    color: theme.palette.custom.tags.twelve,
    background:
      theme.palette.custom.tags_bg.twelve ||
      Color(theme.palette.custom.tags.twelve).alpha(0.2).string(),
  },
  thirteen: {
    color: theme.palette.custom.tags.thirteen,
    background:
      theme.palette.custom.tags_bg.thirteen ||
      Color(theme.palette.custom.tags.thirteen).alpha(0.2).string(),
  },
  fourteen: {
    color: theme.palette.custom.tags.fourteen,
    background:
      theme.palette.custom.tags_bg.fourteen ||
      Color(theme.palette.custom.tags.fourteen).alpha(0.2).string(),
  },
  fifteen: {
    color: theme.palette.custom.tags.fifteen,
    background:
      theme.palette.custom.tags_bg.fifteen ||
      Color(theme.palette.custom.tags.fifteen).alpha(0.2).string(),
  },
  sixteen: {
    color: theme.palette.custom.tags.sixteen,
    background:
      theme.palette.custom.tags_bg.sixteen ||
      Color(theme.palette.custom.tags.sixteen).alpha(0.2).string(),
  },
  seventeen: {
    color: theme.palette.custom.tags.seventeen,
    background:
      theme.palette.custom.tags_bg.seventeen ||
      Color(theme.palette.custom.tags.seventeen).alpha(0.2).string(),
  },
  eighteen: {
    color: theme.palette.custom.tags.eighteen,
    background:
      theme.palette.custom.tags_bg.eighteen ||
      Color(theme.palette.custom.tags.eighteen).alpha(0.2).string(),
  },
  nineteen: {
    color: theme.palette.custom.tags.nineteen,
    background:
      theme.palette.custom.tags_bg.nineteen ||
      Color(theme.palette.custom.tags.nineteen).alpha(0.2).string(),
  },
  twenty: {
    color: theme.palette.custom.tags.twenty,
    background:
      theme.palette.custom.tags_bg.twenty ||
      Color(theme.palette.custom.tags.twenty).alpha(0.2).string(),
  },
}));

export default useStyles;
