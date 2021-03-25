import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
        header: {
          paddingBottom: theme.spacing(2),
          '& .MuiTypography-h2': {
            paddingBottom: theme.spacing(2),
          },
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        filter: {
          [theme.breakpoints.up('md')]: {
            minWidth: '300px',
          },
        },
        list: {
          height: '100%',
          flex: 1,
        },
        fakeItem: {
          margin: theme.spacing(2, 0),
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
          },
        },
        tags: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
            minWidth: '350px',
            marginBottom: 0,
            alignSelf: 'flex-end',
          },
        },
      });
    },
  )();

  return styles;
};
