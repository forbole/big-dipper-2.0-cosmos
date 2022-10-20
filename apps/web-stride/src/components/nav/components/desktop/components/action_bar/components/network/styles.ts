import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(0.8, 2),
          background: theme.palette.background.paper,
          color: theme.palette.custom.fonts.fontTwo,
          borderRadius: theme.shape.borderRadius,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&:hover': {
            cursor: 'pointer',
          },
          '& .MuiSvgIcon-root': {
            marginLeft: '0.1rem',
          },
        },
        icon: {
          width: 24,
          marginRight: theme.spacing(1),
        },
      });
    },
  )();

  return styles;
};
