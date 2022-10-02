import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        list: {
          minHeight: '500px',
          height: '50vh',
          [theme.breakpoints.up('lg')]: {
            minHeight: '65vh',
          },
        },
        paginate: {
          // marginTop: theme.spacing(3),
          // marginBottom: theme.spacing(3),
        },
        providerHeader: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        searchBar: {
          // flex: 1,
          display: 'none',
          marginRight: theme.spacing(2),
          '& .MuiInputBase-root': {
            background: theme.palette.custom.general.surfaceTwo,
          },
          [theme.breakpoints.up('lg')]: {
            display: 'block',
            width: '300px',
            '& .MuiInputBase-root': {
              width: '100%',
              background: 'pink',
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

      });
    },
  )();

  return styles;
};
