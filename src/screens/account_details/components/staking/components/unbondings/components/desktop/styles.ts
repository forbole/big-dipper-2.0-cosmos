import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        wrapper: {
          padding: theme.spacing(1),
        },
        item: {
          padding: theme.spacing(0.5, 0),
          '& .label': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
      });
    },
  )();

  return styles;
};
