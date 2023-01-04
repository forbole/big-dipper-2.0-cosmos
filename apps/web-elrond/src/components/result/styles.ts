import { makeStyles } from '@mui/material/styles';

const styles = makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: theme.palette.custom.fonts.fontTwo,
    '& svg': {
      width: '16px',
      height: '16px',
      marginRight: theme.spacing(0.5),
    },
  },
  success: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.pass,
    },
  },
  fail: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.results.fail,
    },
  },
  pending: {
    '& .MuiSvgIcon-root': {
      fill: theme.palette.custom.fonts.fontFour,
    },
  },
}));

export const useStyles = () => styles();
