import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        copyText: {
          '& .detail': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '& svg': {
              width: '1rem',
              marginRight: theme.spacing(1),
            },
          },
        },
      });
    },
  )();

  return styles;
};
