import { makeStyles } from '@material-ui/core';

export const useStyles = () => {
  const styles = makeStyles(
    () => {
      return ({
        light: {
          '.mode-dark &': {
            display: 'none',
          },
        },
        dark: {
          display: 'none',
          '.mode-dark &': {
            display: 'initial',
          },
        },
      });
    },
  )();

  return styles;
};
