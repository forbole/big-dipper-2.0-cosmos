import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((_theme) => {
    return {
      root: {
        height: '100%',
      },
    };
  })();

  return styles;
};
