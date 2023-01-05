import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(2),
    },
  },
  list: {
    // [theme.breakpoints.up('lg')]: {
    //   minHeight: '75vh',
    //   // minHeight: '700px',
    //   height: '70vh',
    // },
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
  providerHeader: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  searchBar: {
    width: '100%',
    margin: theme.spacing(2, 0),
    '& .MuiInputBase-root': {
      background: theme.palette.custom.general.surfaceTwo,
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      width: '300px',
      '& .MuiInputBase-root': {
        width: '100%',
        // background: theme.palette.custom.general.surfaceTwo,
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
