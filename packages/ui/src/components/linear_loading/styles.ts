import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    minHeight: '150px',
    padding: theme.spacing(2),
    '& > *': {
      width: '70%',
    },
    [theme.breakpoints.up('md')]: {
      '& > *': {
        width: '40%',
      },
    },
  },
}));

export const useStyles = () => styles();
