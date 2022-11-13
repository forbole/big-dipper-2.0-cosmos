import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      ...theme.mixins.layout,
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(1),
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
      [theme.breakpoints.up('lg')]: {
        gridGap: theme.spacing(2),
      },
    },
    messages: {
      minHeight: '500px',
      height: '50vh',
      [theme.breakpoints.up('lg')]: {
        minHeight: '650px',
        height: '40vh',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
