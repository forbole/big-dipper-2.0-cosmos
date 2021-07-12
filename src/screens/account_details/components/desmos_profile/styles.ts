import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        link: {
          color: theme.palette.custom.fonts.highlight,
          '&:hover': {
            cursor: 'pointer',
          },
        },
        profile: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
          },
        },
        avatar: {
          width: '60px',
          height: '60px',
          minHeight: '60px',
          minWidth: '60px',
        },
        description: {
          flex: 1,
          textAlign: 'center',
          '& .tag': {
            color: theme.palette.custom.fonts.fontFour,
          },
          [theme.breakpoints.up('md')]: {
            textAlign: 'left',
            marginLeft: theme.spacing(2),
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          },
        },
        divider: {
          visibility: 'hidden',
          margin: theme.spacing(0.5, 0),
          [theme.breakpoints.up('md')]: {
            visibility: 'visible',
            margin: theme.spacing(2, 0),
          },
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
