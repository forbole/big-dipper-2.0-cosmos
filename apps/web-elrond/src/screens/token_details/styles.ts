import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
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
        gridTemplateColumns: 'repeat(2, 1fr)',
      },
    },
    profile: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/3',
      },
    },
    overview: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '2/3',
      },
    },
    stats: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/2',
      },
    },
    transaction: {
      [theme.breakpoints.up('lg')]: {
        gridColumn: '1/3',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
