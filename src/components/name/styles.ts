import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& p': {
            color: theme.palette.custom.fonts.highlight,
            marginLeft: theme.spacing(1),
            wordBreak: 'break-all',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
      });
    },
  )();

  return styles;
};
