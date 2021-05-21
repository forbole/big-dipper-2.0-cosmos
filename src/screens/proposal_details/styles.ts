import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridTemplateRows: 'min-content min-content auto',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        },
        overview: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        deposits: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 4',
          },
        },
        votes: {
          [theme.breakpoints.up('lg')]: {
            gridColumn: '2 / 4',
            height: '690px',
          },
        },
        votesGraph: {
          // wingman
          // height: '350px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '1 / 2',
            height: '500px',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 / 2',
            height: '690px',
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
