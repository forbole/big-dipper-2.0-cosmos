import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = (percentage: number, topVotingPower:boolean) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-body1': {
            color: theme.palette.custom.fonts.fontTwo,
          },
        },
        chart: {
          display: 'flex',
          height: '2px',
          borderRadius: theme.shape.borderRadius,
          background: (
            topVotingPower
              ? Color(theme.palette.custom.fonts.highlight).alpha(0.2).string()
              : Color(theme.palette.custom.primaryData.three).alpha(0.2).string()
          ),
          overflow: 'hidden',
        },
        active: {
          width: `${percentage}%`,
          background: (
            topVotingPower
              ? theme.palette.custom.fonts.highlight
              : theme.palette.custom.primaryData.three
          ),
        },
        content: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: theme.spacing(1),
          '& .percentage': {
            color: (
              topVotingPower
                ? theme.palette.custom.fonts.highlight
                : theme.palette.custom.primaryData.three
            ),
          },
          [theme.breakpoints.up('lg')]: {
            marginBottom: 0,
          },
        },
      });
    },
  )();

  return styles;
};
