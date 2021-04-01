import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& p': {
            color: theme.palette.custom.fonts.highlight,
            marginLeft: theme.spacing(1),
            whiteSpace: 'nowrap',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
      });
    },
  )();

  return styles;
};
