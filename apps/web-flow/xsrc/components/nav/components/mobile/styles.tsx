import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          zIndex: 500,
          width: '100%',
          position: 'fixed',
          top: '0',
          background: theme.palette.background.default,
        },
        screens: {
          opacity: 0,
          background: theme.palette.background.paper,
          visibility: 'hidden',
          transition: '0.2s ease-in-out',
          position: 'fixed',
          width: '100%',
          paddingTop: '3.5rem',
          height: '100vh',
          '&.open': {
            opacity: 1,
            visibility: 'visible',
          },
          '&.menu': {
            zIndex: 151,
          },
          '&.network': {
            zIndex: 1,
          },
        },
        searchBar: {
          padding: theme.spacing(2),
        },
        networks: {
          padding: theme.spacing(2),
          height: '100%',
          overflow: 'auto',
        },
      });
    },
  )();

  return styles;
};
