import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTablePagination-spacer': {
            display: 'none',
          },
          '& .MuiToolbar-gutters': {
            padding: 0,
            margin: 0,
            flexDirection: 'column-reverse',
            height: 'auto',
            minHeight: 'initial',
          },
          '& .MuiTablePagination-caption': {
            flexShrink: 'initial',
            alignSelf: 'flex-end',
            marginTop: theme.spacing(2),
            color: theme.palette.custom.fonts.fontThree,
          },
          [theme.breakpoints.up('md')]: {
            '& .MuiToolbar-gutters': {
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
            '& .MuiTablePagination-caption': {
              marginTop: 0,
              marginRight: theme.spacing(2),
            },
          },
        },
        mobile: {
          [theme.breakpoints.up('md')]: {
            display: 'none',
          },
        },
        tablet: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'flex',
          },
        },
      });
    }, {
      index: 1,
    },
  )();

  return styles;
};
