import { makeStyles } from 'tss-react/mui';
import { Theme } from '@mui/material';

const useStyles = makeStyles()((theme: Theme) => ({
  switch: {
    width: 48,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(21px)',
        color: '#E6E6E6',
        '& + .MuiSwitch-track': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.99087 3.19234C10.0908 3.19234 10.1901 3.19234 10.2885 3.19234C9.31555 4.09642 8.69015 5.31287 8.52103 6.63023C8.35191 7.94759 8.64976 9.28256 9.36281 10.4031C10.0759 11.5236 11.159 12.3589 12.424 12.7636C13.689 13.1684 15.0558 13.1171 16.2869 12.6186C15.8134 13.7581 15.0394 14.7476 14.0475 15.4817C13.0557 16.2158 11.8831 16.6668 10.655 16.7867C9.42691 16.9067 8.18928 16.691 7.07414 16.1627C5.959 15.6344 5.00819 14.8133 4.32313 13.7869C3.63806 12.7606 3.24445 11.5676 3.18426 10.3351C3.12408 9.10263 3.39958 7.87692 3.98139 6.78874C4.56319 5.70056 5.42948 4.79072 6.48784 4.15627C7.54619 3.52183 8.75692 3.18658 9.99087 3.18628V3.19234Z' stroke='white' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M13.7643 3.47534C13.7643 3.87708 13.9238 4.26236 14.2079 4.54643C14.492 4.8305 14.8773 4.99009 15.279 4.99009C14.8773 4.99009 14.492 5.14968 14.2079 5.43375C13.9238 5.71782 13.7643 6.1031 13.7643 6.50484C13.7643 6.1031 13.6047 5.71782 13.3206 5.43375C13.0365 5.14968 12.6512 4.99009 12.2495 4.99009C12.6512 4.99009 13.0365 4.8305 13.3206 4.54643C13.6047 4.26236 13.7643 3.87708 13.7643 3.47534Z' fill='white' stroke='white' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.6667 8.48535V10.0001M15.9093 9.24273H17.424H15.9093Z' stroke='white' stroke-width='1.3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
          backgroundPosition: '8%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#818181',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
          backgroundColor: '#282828',
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
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
      width: 22,
      height: 22,
      color: '#E6E6E6',
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_2515_60015)'%3E%3Cpath d='M9.99992 14.1666C12.3011 14.1666 14.1666 12.3011 14.1666 9.99992C14.1666 7.69873 12.3011 5.83325 9.99992 5.83325C7.69873 5.83325 5.83325 7.69873 5.83325 9.99992C5.83325 12.3011 7.69873 14.1666 9.99992 14.1666Z' stroke='%23F7F7FF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M5.25 14.75L4.66667 15.3333M2.5 10H3.33333H2.5ZM10 2.5V3.33333V2.5ZM16.6667 10H17.5H16.6667ZM10 16.6667V17.5V16.6667ZM4.66667 4.66667L5.25 5.25L4.66667 4.66667ZM15.3333 4.66667L14.75 5.25L15.3333 4.66667ZM14.75 14.75L15.3333 15.3333L14.75 14.75Z' stroke='%23F7F7FF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2515_60015'%3E%3Crect width='20' height='20' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '92%',
      backgroundColor: theme.palette.mode === 'light' ? '#777777' : '#39393D',
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
      display: 'none',
      margin: 0,
    },
  },
}));

export default useStyles;
