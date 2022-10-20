import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        },
        label: {
          marginBottom: theme.spacing(2),
        },
        data: {
          display: 'flex',
          '& .data__item': {
            width: '50%',
            whiteSpace: 'pre-wrap',
            '& h4': {
              color: theme.palette.custom.fonts.fontTwo,
            },
            '& .MuiTypography-caption': {
              color: theme.palette.custom.fonts.fontThree,
            },
          },
        },
        legends: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          '& .legends__item': {
            width: '50%',
            '&:before': {
              content: '""',
              display: 'inline-block',
              width: '12px',
              height: '12px',
              marginRight: '5px',
              background: theme.palette.custom.chartData.two,
            },
            '&:first-child:before': {
              background: theme.palette.custom.chartData.one,
            },
            '&:last-child:before': {
              background: theme.palette.custom.chartData.three,
            },
            '& .caption__percent': {
              color: theme.palette.custom.fonts.fontThree,
            },
          },
        },
        content: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column',
        },
      });
    },
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
