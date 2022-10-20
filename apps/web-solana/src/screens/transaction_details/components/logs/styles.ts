import {
  makeStyles, useTheme,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        logs: {
          '& .log': {
            background: theme.palette.custom.general.surfaceTwo,
            padding: theme.spacing(2),
            borderRadius: theme.spacing(0.5),
            marginBottom: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            '&:last-child': {
              marginBottom: 0,
            },
            [theme.breakpoints.up('md')]: {
              flexDirection: 'row',
            },
          },
          '& .log__count': {
            background: theme.palette.divider,
            padding: theme.spacing(0, 1.5),
            textAlign: 'center',
            borderRadius: theme.spacing(3),
            marginBottom: theme.spacing(2),
            [theme.breakpoints.up('md')]: {
              marginBottom: 0,
              marginRight: theme.spacing(2),
            },
          },
          '& .log__content': {
            flex: 1,
            wordBreak: 'break-all',
          },
          '& .content:not(:last-child)': {
            marginBottom: theme.spacing(1),
          },
          '& .content': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .content--title': {
            color: theme.palette.custom.fonts.fontOne,
          },
          '& .content--invoke': {
            color: theme.palette.custom.fonts.highlight,
          },
          '& .content--success': {
            color: theme.palette.primary.main,
          },
          '& .content--error': {
            color: theme.palette.custom.primaryData.four,
          },
        },
      });
    }, { index: 1 },
  )();
  return {
    classes: styles,
    theme: useTheme(),
  };
};
