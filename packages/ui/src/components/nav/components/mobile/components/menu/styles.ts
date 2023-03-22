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
  },
  footerActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '1rem',
  },
  language: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: theme.spacing(2),
    '& .MuiTypography-caption': {
      fontSize: theme.spacing(2),
      margin: theme.spacing(0, 1, 0, 3.8),
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
}));

export default useStyles;
