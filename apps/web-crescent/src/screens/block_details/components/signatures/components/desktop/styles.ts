import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      height: '100%',
    },
    cell: {
      ...theme.mixins.tableCell,
    },
    body: {
      color: theme.palette.custom.fonts.fontTwo,
    },
  };
});

export const useStyles = () => {
  return styles();
};
