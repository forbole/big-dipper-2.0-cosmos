import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => {
  const iconFill =
    theme.palette.mode === 'light'
      ? theme.palette.custom.fonts.fontTwo
      : theme.palette.custom.general.icon;
  return {
    root: {
      '& .media': {
        margin: '0 0.5rem',
        '&:first-of-type': {
          marginLeft: 0,
        },
        '&:last-child': {
          marginRight: 0,
        },
        '& path': {
          transition: 'all 0.3s ease',
          fill: iconFill,
        },
        '&:hover': {
          '& path': {
            fill: Color(iconFill).alpha(0.6).string(),
          },
        },
      },
    },
  };
});

export default useStyles;
