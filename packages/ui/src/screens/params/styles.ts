import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.layout,
    display: 'grid',
    gridTemplateRows: 'auto',
    gap: theme.spacing(1),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
}));

export const useStyles = () => styles();
