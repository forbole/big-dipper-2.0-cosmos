import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  bar: {
    '& .MuiSnackbarContent-root': {
      display: 'flex',
      flexDirection: 'row',
      padding: theme.spacing(1, 2.25),
      background: theme?.palette.custom?.general.surfaceTwo,
      color: theme.palette.custom.fonts.fontOne,
    },
  },
  container: { display: 'inline-flex', paddingRight: theme.spacing(2) },
  message: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    minWidth: '100%',
    objectFit: 'contain',
  },
  icon: {
    height: '24px',
    width: '24px',
  },
  link: { color: '#007FFF', fontWeight: 600 },
}));

export default useStyles;
