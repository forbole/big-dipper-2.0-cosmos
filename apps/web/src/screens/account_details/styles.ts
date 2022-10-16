import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateRows: 'auto',
          gridGap: theme.spacing(1),
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            // gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        balance: {
          [theme.breakpoints.up('lg')]: {
            // gridColumn: '1 / 3',
          },
        },
        otherTokens: {
          [theme.breakpoints.up('lg')]: {
            // gridColumn: '1 / 3',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            // gridColumn: '1 / 3',
          },
        },
        staking: {
          [theme.breakpoints.up('lg')]: {
            // gridColumn: '1 / 3',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            // gridColumn: '1 / 3',
          },
        },
      });
    },
  )();

  return styles;
};
