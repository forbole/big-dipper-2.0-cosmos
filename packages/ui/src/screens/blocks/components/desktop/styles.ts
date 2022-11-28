import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  cell: {
    ...theme.mixins.tableCell,
  },
  body: {
    color: theme.palette.custom.fonts.fontTwo,
  },
}));

export const useStyles = () => styles();
