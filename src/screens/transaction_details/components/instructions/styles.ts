import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTypography-h2': {
            paddingBottom: theme.spacing(2),
          },
        },
        list: {
          height: '100%',
          flex: 1,
        },
        fakeItem: {
          margin: theme.spacing(2, 0),
        },
        tags: {
          marginBottom: theme.spacing(2),
        },
      });
    },
  )();

  return styles;
};
