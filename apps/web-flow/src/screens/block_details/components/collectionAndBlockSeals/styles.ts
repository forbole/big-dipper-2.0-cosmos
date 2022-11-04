import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        height: '100%',
      },
      list: {
        minHeight: '500px',
        height: '50vh',
        [theme.breakpoints.up('lg')]: {
          minHeight: '65vh',
        },
      },
    };
  })();

  return styles;
};
