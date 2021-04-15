import {
  makeStyles, createStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles((theme: any) => createStyles({
    root: {
      overflow: 'auto',
      padding: '1rem',
      margin: '0',
      background: theme.palette.background.default,
      '& code': {
        whiteSpace: 'pre-wrap',
      },
    },
  }));

  return {
    classes: useStyles(),
  };
};
