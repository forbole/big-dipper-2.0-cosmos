import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  networkList: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    '& img': {
      width: '25px',
      marginRight: theme.spacing(2),
    },
    '& .network': {
      flex: 1,
      minWidth: 0,
    },
    '& .iconName': {
      border: theme.palette.mode === 'dark' ? '1px solid #414141' : '1px solid #707070',
      borderRadius: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing(1, 1),
      '&:hover': {
        border: `1px solid ${theme.palette.primary.main}`,
      },
    },
  },
  img: {
    width: 'auto',
    height: 'auto',
  },
}));

export default useStyles;
