import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          '& .MuiTableCell-root': {
            overflow: 'auto',
          },
        },
      });
    },
  )();

  return styles;
};
