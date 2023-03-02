import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down(1025)]: {
      height: 'auto',
      padding: theme.spacing(2, 1.5),
    },
    '& .MuiInputBase-root': {
      width: '100%',
      height: '100%',
      background: theme.palette.custom.general.search,
      padding: theme.spacing(1, 2),
      [theme.breakpoints.down(1025)]: {
        padding: theme.spacing(1),
      },
      borderRadius: 48,
    },
    '& .MuiInputBase-input': {
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.palette.custom.fonts.fontFour,
        [theme.breakpoints.down(1025)]: {
          fontSize: '0.85rem',
        },
      },
    },
    '& .Search-icon': {
      background: theme.palette.primary.main,
      borderRadius: '100%',
      padding: 5,
      width: 30,
      height: 30,
      color: 'white',
      cursor: 'pointer',
    },
  },
}));

export default useStyles;
