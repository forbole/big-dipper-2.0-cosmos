import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '150px',
          padding: theme.spacing(2),
          '& > *': {
            width: '70%',
          },
          [theme.breakpoints.up('md')]: {
            '& > *': {
              width: '40%',
            },
          },
        },
      });
    },
  )();

  return styles;
};
