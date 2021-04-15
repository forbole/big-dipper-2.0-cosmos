import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        multisend: {
          marginTop: '1.5rem',
          [theme.breakpoints.up('md')]: {
            marginTop: '1rem',
          },
        },
      });
    },
  )();

  return styles;
};
