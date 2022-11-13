import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      '& .eligible': {
        color: theme.palette.custom.primaryData.four,
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
