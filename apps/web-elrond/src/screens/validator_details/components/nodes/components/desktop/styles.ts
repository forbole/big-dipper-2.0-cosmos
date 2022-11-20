import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      '& .eligible': {
        color: theme.palette.custom.primaryData.four,
      },
    },
  }));

export const useStyles = () => styles();
