import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          ...theme.mixins.layout,
          display: 'grid',
          gridGap: theme.spacing(1),
          height: '100%',
          gridTemplateColumns: '1fr',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('lg')]: {
            gridGap: theme.spacing(2),
          },
        },
      });
    },
  )();

  return styles;
};
