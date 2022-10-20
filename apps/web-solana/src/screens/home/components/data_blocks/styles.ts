import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'grid',
          gridGap: theme.spacing(1),
          gridTemplateRows: 'auto',
          [theme.breakpoints.up('sm')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        slotHeight: {
          background: theme.palette.custom.primaryData.one,
        },
        slotTime: {
          background: theme.palette.custom.primaryData.two,
        },
        price: {
          background: theme.palette.custom.primaryData.three,
        },
        validators: {
          background: theme.palette.custom.primaryData.four,
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
