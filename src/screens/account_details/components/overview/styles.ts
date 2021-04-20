import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        dialog: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          '& .MuiTypography-body1': {
            marginBottom: theme.spacing(2),
          },
          '& .dialog__share--wrapper': {
            marginTop: theme.spacing(2),
          },
          '& .share-buttons': {
            '&:not(:last-child)': {
              marginRight: theme.spacing(1),
            },
            '&.email': {
              '& circle': {
                fill: theme.palette.primary.main,
              },
            },
          },
        },
        actionIcons: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
        icons: {
          '& svg': {
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
          },
        },
        copyText: {
          '& .detail': {
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
          },
        },
      });
    },
  )();

  return styles;
};
