import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => {
  return {
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
  };
});

export const useStyles = () => {
  return styles();
};
