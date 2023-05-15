import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  list: {
    minHeight: '500px',
    height: '50vh',
    [theme.breakpoints.up('lg')]: {
      minHeight: '65vh',
    },
  },
  mobile: {
    height: '100%',
  },
  stakingButtons: {
    padding: '16px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'right',
  },
  stakingDistribution: {
    paddingLeft: '16px',
  },
  stakingDistrButton: {
    padding: '6px 16px',
    alignItems: 'center',
    border: '1px solid #007FFF',
    color: '#007FFF',
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.custom.wallet?.surfaceFour,
    },
    fontFamily: 'SF Pro',
    fontWeight: '590',
    lineHeight: '17px',
    display: 'flex',
    letterSpacing: '-0.002em',
  },
}));

export default useStyles;
