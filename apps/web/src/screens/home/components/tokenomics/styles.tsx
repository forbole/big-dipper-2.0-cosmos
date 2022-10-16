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
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
          width: '100%',
          '& .MuiTypography-caption': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .legends__item': {
            width: '50%',
            '&:before': {
              content: '""',
              display: 'inline-block',
              width: '12px',
              height: '12px',
              marginRight: '5px',
            },
            '&:first-child:before': {
              background: theme.palette.custom.tokenomics.one,
            },
            '&:nth-child(2):before': {
              background: theme.palette.custom.tokenomics.two,
            },
            '&:last-child:before': {
              background: theme.palette.custom.tokenomics.three,
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
