import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          gridTemplateColumns: '1fr',
          gridGap: theme.spacing(1),
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
          },
        },
        instructions: {
          minHeight: '500px',
          height: '50vh',
          [theme.breakpoints.up('lg')]: {
            minHeight: '400px',
            height: '40vh',
          },
        },
      });
    },
  )();

  return styles;
};
