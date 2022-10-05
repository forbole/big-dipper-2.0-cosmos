import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        root: {
          height: '100%',
        },
        list: {
          minHeight: '500px',
          height: '50vh',
          // [theme.breakpoints.up('lg')]: {
          //   minHeight: '65vh',
          // },
        },
        actionIcons: {
          width: '1rem',
          // marginLeft: theme.spacing(1),
        },
      });
    },
  )();

  return styles;
};
