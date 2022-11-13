import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(
  (theme) => {
    return {
      description: {
        alignItems: 'flex-start',
        '& .label': {
          marginRight: theme.spacing(2),
        },
        '& .detail': {
          wordBreak: 'break-all',
        },
      },
    };
  },
  { index: 1 }
);

export const useStyles = () => {
  return styles();
};
