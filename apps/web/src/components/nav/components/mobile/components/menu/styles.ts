import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme?.palette?.background.paper,
          display: 'flex',
          flexDirection: 'column',
        },
        menu: {
          flex: '1',
        },
        footerActions: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '1rem',
        },
        language: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
        },
        theme: {
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          '& svg': {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
          '& .MuiTypography-caption': {
            margin: '0 0.3rem',
          },
        },
        drawer: {
          background: Color(theme.palette.background.paper).alpha(0.5).string(),
        },
      });
    },
  )();

  return styles;
};
