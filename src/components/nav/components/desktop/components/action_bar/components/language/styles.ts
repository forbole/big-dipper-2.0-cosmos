import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        selected: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          '&:hover': {
            cursor: 'pointer',
          },
          '& svg': {
            marginRight: theme.spacing(0.5),
          },
        },
      });
    },
  )();

  return styles;
};
