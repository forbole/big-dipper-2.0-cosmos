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
      },
    },
    profile: {
      // [theme.breakpoints.up('lg')]: {
      //   gridColumn: '1/4',
      // },
    },
    overview: {
      // [theme.breakpoints.up('lg')]: {
      //   gridColumn: '1/4',
      // },
    },
    transactions: {
      // [theme.breakpoints.up('lg')]: {
      //   gridColumn: '1/4',
      // },
    },
  };
});

export const useStyles = () => {
  return styles();
};
