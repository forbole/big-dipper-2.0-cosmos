import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          // display: 'flex',
          // alignItems: 'center',
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          '& .MuiTypography-h2': {
            marginLeft: theme.spacing(2),
          },
        },
        icons: {
          '& svg': {
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
          },
        },
        actionIcons: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
        copyText: { '& .detail': {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          '& svg': {
            width: '1rem',
            marginLeft: theme.spacing(1),
          },
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            '& svg': {
              marginLeft: 0,
              marginRight: theme.spacing(1),
            },
          },
        } },
      });
    },
  )();

  return styles;
};
