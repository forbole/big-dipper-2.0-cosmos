import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      ...theme.mixins.layout,
      '& a': {
        color: theme.palette.custom.fonts.highlight,
      },
    },
  }));

export const useStyles = () => styles();
