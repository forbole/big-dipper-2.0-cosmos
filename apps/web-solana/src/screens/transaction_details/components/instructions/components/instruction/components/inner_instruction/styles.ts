import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme.palette.custom.general.surfaceThree,
          borderRadius: theme.spacing(0.5),
          padding: theme.spacing(2),
          marginBottom: theme.spacing(2),
          overflow: 'auto',
          '&:last-child': {
            marginBottom: 0,
          },
          '& .divider': {
            margin: theme.spacing(2, 0),
          },
        },
        header: {
          '& .MuiTypography-body1': {
            wordBreak: 'break-all',
          },
          '& .header__index': {
            padding: theme.spacing(0, 1.5),
            textAlign: 'center',
            background: theme.palette.divider,
            borderRadius: theme.spacing(3),
          },
          '& .header__content': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(1),
          },
          '& .header__label--desktop': {
            display: 'none',
            [theme.breakpoints.up('lg')]: {
              display: 'block',
            },
          },
          '& .header__label--mobile': {
            display: 'block',
            [theme.breakpoints.up('lg')]: {
              display: 'none',
            },
          },
          [theme.breakpoints.up('lg')]: {
            '& .header__flex': {
              display: 'flex',
              alignItems: 'center',
            },
            '& .header__index': {
              marginRight: theme.spacing(2),
            },
          },
        },
      });
    }, { index: 1 },
  )();
  return styles;
};
