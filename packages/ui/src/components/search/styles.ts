import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    root: {
      '& .MuiInputBase-root': {
        width: '100%',
        background: theme.palette.background.paper,
        padding: theme.spacing(0.4, 1.2),
        borderRadius: theme.shape.borderRadius,
      },
      '& .MuiInputBase-input': {
        textOverflow: 'ellipsis',
        '&::placeholder': {
          color: theme.palette.custom.fonts.fontFour,
        },
      },
    },
  };
});

export const useStyles = () => {
  return styles();
};
