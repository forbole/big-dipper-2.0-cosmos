import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.layout,
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '1fr',
    gridGap: theme.spacing(1),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('lg')]: {
      gridGap: theme.spacing(2),
    },
  },
  messages: {
    minHeight: '500px',
    height: '50vh',
    [theme.breakpoints.up('lg')]: {
      minHeight: '650px',
      height: '40vh',
    },
  },
}));

export const useStyles = () => styles();
