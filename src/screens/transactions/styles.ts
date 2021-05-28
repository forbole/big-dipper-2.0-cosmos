import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        box: {
          minHeight: '500px',
          height: '50vh',
          [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '65vh',
          },
        },
      });
    },
  )();

  return styles;
};
