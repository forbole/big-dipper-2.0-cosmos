import { makeStyles } from '@mui/styles';

const styles = makeStyles(
  (theme) => ({
    root: {
      height: '100%',
    },
    list: {
      minHeight: '500px',
      height: '50vh',
      [theme.breakpoints.up('lg')]: {
        minHeight: '65vh',
      },
    },
    searchWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    searchBar: {
      display: 'none',
      [theme.breakpoints.up('lg')]: {
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
  }),
  { index: 1 }
);

export const useStyles = () => styles();
