import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
}));

export const useStyles = () => styles();
