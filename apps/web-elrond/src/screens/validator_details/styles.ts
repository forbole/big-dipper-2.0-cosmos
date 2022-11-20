import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      ...theme.mixins.layout,
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
      display: 'grid',
      gridTemplateRows: 'auto',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        gridGap: theme.spacing(2),
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    profile: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/4',
      },
    },
    stake: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/3',
      },
    },
    overview: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '3/4',
      },
    },
    contractDetails: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/4',
      },
    },
    nodes: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/4',
      },
    },
    transaction: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/4',
      },
    },
  }));

export const useStyles = () => styles();
