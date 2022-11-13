import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(
  (theme) => {
    return {
      root: {
        '& .memo': {
          alignItems: 'flex-start',
          '& .label': {
            marginRight: theme.spacing(5),
          },
        },
      },
    };
  },
  { index: 1 }
);

export const useStyles = () => {
  return styles();
};
