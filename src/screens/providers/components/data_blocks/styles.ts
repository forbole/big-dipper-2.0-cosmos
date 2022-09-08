import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'grid',
          // gridGap: theme.spacing(1),
          // gridTemplateRows: 'auto',
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            // gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(1, 1fr)',
          },
        },
        activeProviders: {
          background: theme.palette.custom.primaryData.one,
        },
        activeLeases: {
          background: theme.palette.custom.primaryData.three,
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
