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
          minHeight: '400px',
          height: '100%',
          '& .MuiTypography-body1': {
            marginTop: theme.spacing(2),
            color: theme.palette.custom.fonts.fontFour,
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
