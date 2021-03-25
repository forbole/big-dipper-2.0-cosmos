import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        memo: {
          alignItems: 'flex-start',
          '& .label': {
            marginRight: theme.spacing(5),
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
