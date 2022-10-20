import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          gridColumn: '1 / 2',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        header: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
          },
        },
        market: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '2 / 3',
          },
        },
        holders: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
      });
    },
  )();

  return styles;
};
