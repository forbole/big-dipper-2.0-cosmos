import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          overflow: 'auto',
          '& .MuiTableCell-root': {
            whiteSpace: 'nowrap',
          },
        },
      });
    },
  )();

  return styles;
};
