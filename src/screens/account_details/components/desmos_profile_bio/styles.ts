import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        profile: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
          },
        },
        avatar: {
          width: '60px',
          height: '60px',
          minHeight: '60px',
          minWidth: '60px',
        },
        description: {
          flex: 1,
          '& .MuiTypography-body1': {
            color: theme.palette.custom.fonts.fontFour,
          },
          [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(2),
          },
        },
        divider: {
          visibility: 'hidden',
          margin: theme.spacing(1, 0),
          [theme.breakpoints.up('md')]: {
            visibility: 'visible',
            margin: theme.spacing(2, 0),
          },
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
