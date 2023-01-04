import { makeStyles } from '@mui/styles';
import Color from 'color';

const styles = makeStyles(
  (theme) => ({
    root: {
      '& .MuiListItemIcon-root': {
        minWidth: '48px',
      },
      '&.MuiMenuItem-gutters': {
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
  }),
  { index: 1 }
);

export const useStyles = () => styles();
