import { makeStyles } from '@mui/material/styles';

const styles = makeStyles(
  (theme) => ({
    root: {
      '& .memo': {
        alignItems: 'flex-start',
        '& .label': {
          marginRight: theme.spacing(5),
        },
      },
    },
  }),
  { index: 1 }
);

export const useStyles = () => styles();
