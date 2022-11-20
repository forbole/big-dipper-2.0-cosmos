import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      background: theme.palette.background.paper,
      '& svg': {
        width: '216px',
        // padding: '16px 12px 20px',
        padding: theme.spacing(2, 1.75, 2.5),
      },
    },
    content: {
      padding: theme.spacing(3),
      height: '400px',
      overflow: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: theme.spacing(3, 2),
    },
  }));

export const useStyles = () => styles();
