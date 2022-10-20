import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          background: theme.palette.custom.general.surfaceTwo,
          padding: theme.spacing(2),
          borderRadius: theme.spacing(0.5),
          marginBottom: theme.spacing(2),
          overflow: 'auto',
          '&:last-child': {
            marginBottom: 0,
          },
        },
        title: {
          display: 'flex',
          flexDirection: 'column',
          '& .MuiTypography-body1': {
            wordBreak: 'break-all',
          },
          '& .title__content': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: theme.spacing(2),
          },
          '& .title__index': {
            padding: theme.spacing(0, 1.5),
            textAlign: 'center',
            background: theme.palette.divider,
            borderRadius: theme.spacing(3),
            marginBottom: theme.spacing(2),
          },
          '& .title__actions': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          '& .title__actions-display': {
            transition: 'all 0.3s ease-in-out',
          },
          '& .title__actions-display:hover': {
            cursor: 'pointer',
          },
          '& .title__actions-display--hide': {
            transform: 'rotate(0)',
          },
          '& .title__actions-display--show': {
            transform: 'rotate(180deg)',
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            '& .title__content': {
              flexDirection: 'row',
              marginBottom: 0,
            },
            '& .title__index': {
              marginBottom: 0,
              marginRight: theme.spacing(2),
            },
            '& .title__actions': {
              justifyContent: 'flex-start',
            },
            '& .title__actions-display': {
              marginLeft: theme.spacing(2),
            },
          },
        },
        parent: {
          '& .parent__divider': {
            margin: theme.spacing(2, 0),
          },
          '& .parent__label': {
            marginBottom: theme.spacing(2),
          },
        },
      });
    }, { index: 1 },
  )();
  return styles;
};
