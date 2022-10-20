import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
        },
        item: {
          marginBottom: theme.spacing(2),
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
          },
        },
        flex: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
      });
    },
  )();

  return styles;
};
