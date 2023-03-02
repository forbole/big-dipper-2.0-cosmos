import { makeStyles } from 'tss-react/mui';
import Color from 'color';

const useStyles = makeStyles()((theme) => ({
  root: {
    background: theme?.palette?.background.paper,
    display: 'flex',
    flexDirection: 'column',
  },
  menu: {
    flex: '1',
    '& .searchbar': {
      padding: theme.spacing(1),
    },
  },
  footerActions: {
    display: 'flex',
    width: '100%',
    padding: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  language: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-caption': {
      margin: '0 0.3rem',
    },
  },
  theme: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
}));

export default useStyles;
