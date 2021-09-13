import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        status: {
          color: theme.palette.custom.fonts.fontTwo,
          '&.unknown': {
            color: theme.palette.custom.condition.zero,
          },
          '&.unbonded': {
            color: theme.palette.custom.condition.zero,
          },
          '&.active': {
            color: theme.palette.custom.condition.one,
          },
          '&.jailed': {
            color: theme.palette.custom.condition.two,
          },
          '&.unbonding': {
            color: theme.palette.custom.condition.three,
          },

        },
      });
    },
  )();

  return styles;
};
