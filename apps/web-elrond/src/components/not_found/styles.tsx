import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '150px',
          height: '100%',
          '& .MuiTypography-body1': {
            color: theme.palette.divider,
          },
          '& .MuiSvgIcon-root': {
            color: theme.palette.divider,
          },
        },
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: theme.spacing(2),
        },
      });
    },
  )();

  return styles;
};
