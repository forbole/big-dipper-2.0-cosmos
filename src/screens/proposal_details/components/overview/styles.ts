import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        content: {
          marginTop: theme.spacing(2),
          display: 'grid',
          '& .label': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& > *': {
            marginBottom: theme.spacing(1),
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '150px auto',
          },
        },
      });
    },
  )();

  return styles;
};
