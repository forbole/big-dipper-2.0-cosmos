import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          minHeight: '500px',
          height: '50vh',
          [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '65vh',
          },
        },
        mobile: {
          [theme.breakpoints.up('lg')]: {
            display: 'none',
          },
        },
        desktop: {
          display: 'none',
          [theme.breakpoints.up('lg')]: {
            display: 'block',
          },
        },
      });
    },
  )();

  return styles;
};
