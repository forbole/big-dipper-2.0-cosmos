import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        profile: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        avatar: {
          width: '60px',
          height: '60px',
          minHeight: '60px',
          minWidth: '60px',
        },
        description: {
          flex: 1,
          marginLeft: theme.spacing(2),
          '& .MuiTypography-body1': {
            color: theme.palette.custom.fonts.fontFour,
          },
        },
        divider: {
          margin: theme.spacing(2),
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
