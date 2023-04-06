import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '& .MuiInputBase-root': {
      width: '100%',
      background: theme.palette.mode === 'dark' ? '#282828' : '#F9F9F9',
      padding: theme.spacing(0.4, 1.2),
      borderRadius: theme.shape.borderRadius,
      svg: {
        width: theme.spacing(2),
        padding: 0,
      },
    },
    '& .MuiInputBase-input': {
      textOverflow: 'ellipsis',
      '&::placeholder': {
        color: theme.palette.custom.fonts.fontFour,
      },
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(0.75, 2.5, 1),
    backgroundColor: theme.palette.custom.primaryData.one,
    borderRadius: theme.spacing(0.5),
    fontWeight: 600,
    fontSize: theme.spacing(2),
    letterSpacing: '0.036em',
    color: theme.palette.text.primary,
    height: '40%',
    marginLeft: '21px',
  },
}));

export default useStyles;
