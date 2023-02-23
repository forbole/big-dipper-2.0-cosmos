import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    '&.MuiSvgIcon-root': {
      width: '16px',
      height: '16px',
      margin: theme.spacing(0, 1),
    },
  },
}));

export default useStyles;
