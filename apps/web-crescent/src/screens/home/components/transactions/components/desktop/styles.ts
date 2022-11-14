import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => {
  return {
    root: {
      overflow: 'auto',
    },
    table: {
      '& .MuiTableBody-root': {
        '& .MuiTableCell-root': {
          whiteSpace: 'nowrap',
        },
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
