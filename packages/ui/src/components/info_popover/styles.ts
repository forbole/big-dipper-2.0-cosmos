import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      display: 'inline-block',
      fontSize: '1rem',
      margin: theme.spacing(0, 0.5),
    },
    popover: {
      pointerEvents: 'none',
      '& .MuiPopover-paper': {
        padding: '1rem',
        maxWidth: '300px',
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
