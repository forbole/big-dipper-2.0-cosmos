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
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(2, 1fr) 500px',
          },
        },
        address: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        status: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        profile: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        votingPower: {
          background: '#ffc93c',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        blocks: {
          background: '#dbf6e9',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '3 / 4',
          },
        },
        staking: {
          background: '#9ddfd3',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        transactions: {
          background: '#31326f',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
      });
    },
  )();

  return styles;
};
