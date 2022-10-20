import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'hidden',
          [theme.breakpoints.up('md')]: {
            // display: 'flex',
            // flexDirection: 'column',
          },
        },
      });
    },
  )();

  return styles;
};
