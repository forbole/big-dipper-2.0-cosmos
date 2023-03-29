import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    height: '110px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.primary.main,
    '& .label': {
      width: '50%',
      // marginBottom: theme.spacing(2),
      color: theme.palette.primary.contrastText,
    },
    '& .content': {
      width: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    '& .description': {
      display: 'block',
      color: theme.palette.primary.contrastText,
      fontSize: '1rem',
    },
  },
}));

export default useStyles;
