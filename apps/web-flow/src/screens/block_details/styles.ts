import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      ...theme.mixins.layout,
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
      display: 'grid',
      gridTemplateRows: 'auto auto 1fr',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(1),
      [theme.breakpoints.up('lg')]: {
        gridGap: theme.spacing(2),
      },
    },
    signatures: {
      height: '200px',
      [theme.breakpoints.up('lg')]: {
        height: '150px',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
