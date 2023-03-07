import Color from 'color';
import { none } from 'ramda';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '&.MuiListItemButton-gutters': {
      padding: '16px',
      margin: '0 12px',
      borderRadius: 4,
      gap: 30,
    },
    '& .MuiListItemText-root': {
      color: theme.palette.custom.general.icon,
      margin: 0,
    },
    '& svg': {
      fill: 'none',
    },
    '&.active': {
      background: Color(theme.palette.primary.main).alpha(0.2).lighten(0.5).string(),
      '& .MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
  },
  listItemIcon: {
    minWidth: 0,
    [theme.breakpoints.down(1025)]: {
      '&.active': {
        '& svg': {
          '& path': {
            fill: '#25D695',
          },
        },
      },
    },
  },
  listItemText: {
    '&& *': {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '21px',
    },
  },
}));

export default useStyles;
