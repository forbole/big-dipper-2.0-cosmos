import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiListItemIcon-root': {
      minWidth: '48px',
    },
    '&.MuiListItem-gutters': {
      padding: theme.spacing(2, 2.5),
    },
    '& .MuiListItemText-root': {
      color: theme.palette.custom.general.icon,
    },
    '&.active': {
      background: Color(theme.palette.background.paper).lighten(0.5).string(),
      '& .MuiListItemIcon-root': {
        '& svg': {
          fill: theme?.palette?.primary?.main,
        },
      },
      '& .MuiListItemText-root': {
        color: theme.palette.primary.main,
      },
    },
  },
}));

export default useStyles;
