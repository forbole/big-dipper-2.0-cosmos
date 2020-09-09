import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'auto',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        },
        profile: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        skipRate: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        activeStakeGraph: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
            // height: '550px',
          },
        },
        potential: {
          background: '#fed9b7',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '3 / 4',
          },
        },
        stakeList: {
          background: '#f07167',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        transactions: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
      });
    },
  )();

  return styles;
};
