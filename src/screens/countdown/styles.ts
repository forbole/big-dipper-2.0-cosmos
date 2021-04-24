import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          flexDirection: 'column',
          background: theme.palette.background.default,
        },
        chain: {
          color: theme.palette.primary.main,
        },
        timeContainer: {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '8px',
          margin: theme.spacing(1, 0),
        },
        item: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        },
      });
    }, {
      index: 1,
    },
  )();

  return styles;
};
