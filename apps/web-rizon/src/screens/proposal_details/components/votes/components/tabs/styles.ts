import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
      });
    }, { index: 1 },
  )();

  return styles;
};
