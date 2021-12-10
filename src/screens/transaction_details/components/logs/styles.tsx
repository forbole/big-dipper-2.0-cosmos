import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      overflow: 'hidden',
    },
    header: {
      paddingBottom: theme.spacing(2),
    },
    pre: {
      maxHeight: '400px',
      overflow: 'auto',
      padding: '1rem',
      margin: '0',
      background: theme.palette.background.default,
      flex: 1,
      '& code': {
        whiteSpace: 'pre-wrap',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
