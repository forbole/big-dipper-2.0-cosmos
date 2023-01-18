import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '500px',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
      minHeight: '65vh',
    },
  },
  list: {
    flex: 1,
  },
  total: {
    color: theme.palette.custom.fonts.fontThree,
    textAlign: 'right',
    [theme.breakpoints.up('lg')]: {
      color: theme.palette.custom.fonts.fontTwo,
    },
  },
  search: {
    margin: theme.spacing(2, 0),
    '& .MuiInputBase-root': {
      width: '100%',
      background: theme.palette.custom.general.surfaceTwo,
      padding: theme.spacing(0.4, 1.2),
      borderRadius: theme.shape.borderRadius,
    },
    '& .MuiInputBase-input': {
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.palette.custom.fonts.fontThree,
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '300px',
      margin: 0,
    },
  },
  topContent: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
    },
  },
}));

export default useStyles;
