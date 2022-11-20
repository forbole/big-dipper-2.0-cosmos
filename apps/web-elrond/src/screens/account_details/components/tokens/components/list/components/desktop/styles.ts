import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => ({
    root: {
      '& .MuiTableCell-root': {
        whiteSpace: 'nowrap',
      },
    },
  }));

export const useStyles = () => styles();
