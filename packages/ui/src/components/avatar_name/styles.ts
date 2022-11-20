import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& p': {
        color: theme.palette.custom.fonts.highlight,
        marginLeft: theme.spacing(1),
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }));

export const useStyles = () => styles();
