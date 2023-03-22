import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles<{ checked: true | false }>()((theme, { checked }) => ({
  toggle: {
    width: 39,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(17px)',
        color: '#FF835B',
        '& + .MuiSwitch-track': {
          backgroundRepeat: 'no-repeat',
          backgroundColor: theme.palette.mode === 'dark' ? '#414141' : '#707070',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
          backgroundColor: '#282828',
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#FF835B',
        border: `6px solid ${theme.palette.common.white}`,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: 'C4C4C4',
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 18,
      height: 18,
      // eslint-disable-next-line no-nested-ternary
      color: checked ? '#FF835B' : theme.palette.mode === 'dark' ? '#999999' : '#C4C4C4',
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'dark' ? '#414141' : '#707070',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  },
  caption: {
    marginLeft: theme.spacing(1),
    fontSize: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(1),
    },
  },
}));

export default useStyles;
