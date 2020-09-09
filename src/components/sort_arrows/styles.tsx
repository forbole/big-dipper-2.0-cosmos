import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '18px',
          width: '18px',
        },
        svg: {
          position: 'absolute',
          width: '14px',
          height: '14px',
          right: 0,
          fill: theme.palette.custom.fonts.fontTwo,
        },
        up: {
          transform: 'rotate(180deg)',
          '&.desc': {
            fill: theme.palette.custom.fonts.fontThree,
          },
        },
        down: {
          '&.asc': {
            fill: theme.palette.custom.fonts.fontThree,
          },
        },
      });
    },
  )();

  return styles;
};
