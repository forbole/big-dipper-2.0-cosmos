import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    ...theme.mixins.layout,
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: '1fr',
    gridGap: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gridGap: theme.spacing(2),
    },
  },
  signatures: {
    height: '450px',
    [theme.breakpoints.up('lg')]: {
      height: '450px',
    },
  },
}));

export const useStyles = () => styles();
