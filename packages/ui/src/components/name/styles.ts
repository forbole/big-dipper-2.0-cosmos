import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      color: theme.palette.custom.fonts.highlight,
      wordBreak: 'break-all',
      '&:hover': {
        cursor: 'pointer',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
