import { makeStyles, Theme } from '@material-ui/core/styles';
import Color from 'color';

const styles = makeStyles<Theme, { percentage: number; topVotingPower: boolean }>((theme) => ({
    root: {
      '& .MuiTypography-body1': {
        color: (props) =>
          props.topVotingPower
            ? theme.palette.custom.fonts.fontFour
            : theme.palette.custom.fonts.fontTwo,
      },
    },
    chart: {
      display: 'flex',
      height: '2px',
      borderRadius: theme.shape.borderRadius,
      background: (props) =>
        props.topVotingPower
          ? Color(theme.palette.custom.fonts.fontFour).alpha(0.2).string()
          : Color(theme.palette.custom.primaryData.three).alpha(0.2).string(),
      overflow: 'hidden',
    },
    active: {
      width: (props) => `${props.percentage}%`,
      background: (props) =>
        props.topVotingPower
          ? theme.palette.custom.fonts.fontFour
          : theme.palette.custom.primaryData.three,
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(1),
      '& .percentage': {
        color: (props) =>
          props.topVotingPower
            ? theme.palette.custom.fonts.fontFour
            : theme.palette.custom.primaryData.three,
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: 0,
      },
    },
  }));

export const useStyles = (percentage: number, topVotingPower: boolean) => styles({ percentage, topVotingPower });
