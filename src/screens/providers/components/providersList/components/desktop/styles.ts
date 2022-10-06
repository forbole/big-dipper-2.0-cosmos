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
        actionIcons: {
          '&:hover': {
            cursor: 'pointer',
          },
          width: '1rem',
          marginLeft: theme.spacing(1),
        },
        emailIcon: {
          '&:hover': {
            cursor: 'pointer',
          },
          width: '1.5rem',
        },
      });
    },
  )();

  return styles;
};
