import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    height: '110px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    color: theme.palette.custom.fonts.data_blocks,
    '& .label': {
      marginBottom: theme.spacing(2),
    },
    '& .content': {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },
    '& .description': {
      display: 'none',
      color: theme.palette.custom.fonts.fontFive,
      [theme.breakpoints.up('md')]: {
        display: 'block',
      },
    },
  },
}));

export default useStyles;
