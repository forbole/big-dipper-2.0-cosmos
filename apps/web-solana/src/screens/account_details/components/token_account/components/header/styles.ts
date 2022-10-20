import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        avatar: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
        root: {
          display: 'flex',
          alignItems: 'center',
        },
        content: {
          marginLeft: theme.spacing(2),
        },
        actionIcons: {
          '&:hover': {
            cursor: 'pointer',
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
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
