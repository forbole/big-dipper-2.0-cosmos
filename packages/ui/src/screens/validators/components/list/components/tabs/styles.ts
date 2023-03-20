import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    alignItems: 'center',
    gap: '1rem',
  },
  searchBar: {
    display: 'block',
    padding: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      width: '300px',
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
    },
  },
}));

export default useStyles;
