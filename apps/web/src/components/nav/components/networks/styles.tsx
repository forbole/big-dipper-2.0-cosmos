import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        networkList: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& img': {
            width: '25px',
            marginRight: theme.spacing(2),
          },
          '& .network': {
            flex: 1,
            minWidth: 0,
          },
        },
      });
    },
  )();

  return styles;
};
