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
        box: {
          minHeight: '500px',
          height: '50vh',
          [theme.breakpoints.up('lg')]: {
            height: '100%',
            minHeight: '65vh',
          },
        },
        memory: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '2 / 3',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '2 / 3',
            height: '100%',
          },
        },
        compute: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '3 / 4',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '3 / 4',
            height: '100%',
          },
        },
        storage: {
          height: '375px',
          [theme.breakpoints.up('md')]: {
            gridColumn: '4 / 5',
          },
          [theme.breakpoints.up('lg')]: {
            gridColumn: '4 / 5',
            height: '100%',
          },
        },
        title: {
          background: '#31326f',
          [theme.breakpoints.up('lg')]: {
            gridColumn: '1 /5',
          },
        },
      });
    },
  )();

  return styles;
};
