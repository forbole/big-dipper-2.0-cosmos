import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      console.log(theme, 'my theme');
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          background: theme.palette.background.default,
        },
      });
    }, {
      index: 1,
    },
  )();

  return styles;
};
