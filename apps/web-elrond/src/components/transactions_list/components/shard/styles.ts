import { makeStyles } from '@mui/material/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      '&.MuiSvgIcon-root': {
        width: '16px',
        height: '16px',
        margin: theme.spacing(0, 1),
      },
    },
  }))();

  return styles;
};
