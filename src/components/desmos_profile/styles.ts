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
        tag: {
          alignSelf: 'flex-end',
          '&:not(:last-child)': {
            marginRight: 0,
          },
          '&.tablet': {
            marginLeft: theme.spacing(2),
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
        validatorStatus: {
          '&.mobile': {
            [theme.breakpoints.up('md')]: {
              display: 'none',
            },
          },
          '&.tablet': {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'block',
            },
          },
        },
        nicknameWrapper: {
          [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
