import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => {
  return {
    root: {
      '& .MuiTableCell-root': {
        whiteSpace: 'nowrap',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
