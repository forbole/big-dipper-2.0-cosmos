import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  root: {
    '& .MuiInputBase-root': {
      width: '300px',
      height: '32px',
      background: theme.palette.mode === 'dark' ? '#282828' : theme.palette.background.paper,
      padding: theme.spacing(0.4, 1.2),
      borderRadius: '8px',
    },
    '& .MuiInputBase-input': {
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.palette.custom.fonts.fontFour,
      },
    },
  },
  iconSearch: {
    fill: 'none',
  },
}));

export default useStyles;
