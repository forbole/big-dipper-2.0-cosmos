import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          minHeight: '100%',
        },
        list: {
          margin: theme.spacing(2, 0),
        },
        item: {
          marginBottom: theme.spacing(2),
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
            wordBreak: 'break-all',
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
      });
    },
  )();

  return styles;
};
