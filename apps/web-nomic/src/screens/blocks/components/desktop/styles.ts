import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
        },
        cell: {
          ...theme.mixins.tableCell,
        },
        body: {
          color: theme.palette.custom.fonts.fontTwo,
        },
      });
    },
  )();

  return styles;
};
