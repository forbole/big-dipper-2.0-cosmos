import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          padding: theme.spacing(2),
          background: theme.palette.primary.main,
          borderRadius: theme.shape.borderRadius,
          height: '110px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          '& .label': {
            marginBottom: theme.spacing(2),
          },
          '& .content': {
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          },
          '& .description': {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'block',
            },
          },
        },
      });
    },
  )();

  return styles;
};
