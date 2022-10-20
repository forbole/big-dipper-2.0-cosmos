import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          flexDirection: 'column',
        },
        desktopOptions: {
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          '& .MuiFormControlLabel-root': {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'inline-flex',
            },
          },
        },
        mobileOptions: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: theme.spacing(2),
          '& .MuiFormControlLabel-root': {
            marginRight: 0,
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          },
          [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing(0),
          },
        },
        header: {
          paddingBottom: theme.spacing(2),
          // '& .MuiTypography-h2': {
          //   paddingBottom: theme.spacing(2),
          // },
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
        },
        filter: {
          width: '100%',
          [theme.breakpoints.up('md')]: {
            minWidth: '300px',
          },
        },
        list: {
          height: '100%',
          flex: 1,
        },
        item: {
          margin: theme.spacing(2, 0),
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            padding: theme.spacing(0, 2),
            '& .msg': {
              marginTop: theme.spacing(0.5),
            },
          },
        },
        tags: {
          marginBottom: theme.spacing(2),
          [theme.breakpoints.up('lg')]: {
            minWidth: '200px',
            marginBottom: 0,
            paddingRight: theme.spacing(2),
            alignSelf: 'flex-start',
          },
        },
      });
    },
  )();

  return styles;
};
