import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridGap: theme.spacing(1),
          gridTemplateRows: 'auto auto 1fr',
          gridTemplateColumns: 'repeat(1, 1fr)',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        dataBlocks: {
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 5',
          },
        },
        price: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        epoch: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 2',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '3 / 4',
            height: '100%',
          },
        },
        stakeWeight: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '2 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '4 / 5',
            height: '100%',
          },
        },
        blocks: {
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 3',
          },
        },
        transactions: {
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '3 / 5',
          },
        },
      });
    }, {
      index: 1,
    },
  )();

  return styles;
};
