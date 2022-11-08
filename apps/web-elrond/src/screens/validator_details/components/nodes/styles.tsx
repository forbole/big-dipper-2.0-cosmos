import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        '& .MuiTypography-h2': {
          marginBottom: theme.spacing(2),
        },
      },
      paginate: {
        marginTop: theme.spacing(3),
      },
    };
  })();

  return styles;
};
