import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
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
      },
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& > div': {
        width: '50%',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};