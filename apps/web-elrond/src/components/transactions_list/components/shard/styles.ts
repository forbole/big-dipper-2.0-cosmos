import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        display: 'flex',
        alignItems: 'center',
      },
      icon: {
        '&.MuiSvgIcon-root': {
          width: '16px',
          height: '16px',
          margin: theme.spacing(0, 1),
        },
      },
    };
  })();

  return styles;
};
