import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        contentWrapper: {
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
        },
        listContentWrapper: {
          width: '100%',
        },
        item: {
          marginBottom: theme.spacing(2),
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        chart: {
          height: '250px',
          width: '100%',
          [theme.breakpoints.up('md')]: {
            height: '350px',
          },
          [theme.breakpoints.up('lg')]: {
            height: '275px',
          },
        },
      });
    },
  )();

  return {
    classes: styles,
    theme: useTheme(),
  };
};
