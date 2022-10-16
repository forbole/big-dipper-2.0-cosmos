import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
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
      });
    }, { index: 1 },
  )();

  return styles;
};
