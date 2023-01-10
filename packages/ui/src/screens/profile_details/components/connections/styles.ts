import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  noWrap: {
    whiteSpace: 'nowrap',
  },
  paginate: {
    marginTop: theme.spacing(2),
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      cursor: 'pointer',
    },
    '& svg': {
      fill: theme.palette.custom.general.icon,
      '& path': {
        fill: theme.palette.custom.general.icon,
      },
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiButtonBase-root': {
      padding: 0,
    },
  },
  dialog: {
    '& .MuiDialog-paper': {
      width: '1000px',
    },
  },
  formItem: {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      width: '100%',
    },
    '& .form-item--label': {
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
