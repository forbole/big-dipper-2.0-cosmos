import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (coverUrl?: string) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'hidden',
        },
        cover: {
          height: '125px',
          background: theme.palette.custom.tags.zero,
          backgroundImage: `url(${coverUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          margin: theme.spacing(-2, -2, 0, -2),
          overflow: 'hidden',
        },
        avatarContainer: {
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: theme.spacing(1.5, 0),
        },
        avatar: {
          position: 'absolute',
          width: '75px',
          height: '75px',
          minHeight: '75px',
          minWidth: '75px',
          border: `solid 3px ${theme.palette.background.paper}`,
          top: theme.spacing(-3),
          left: 0,
        },
        link: {
          color: theme.palette.custom.fonts.highlight,
          '&:hover': {
            cursor: 'pointer',
          },
        },
        nicknameWrapper: {
          margin: theme.spacing(1, 0),
          '& .tag': {
            color: theme.palette.custom.fonts.fontFour,
          },
        },
      });
    },
    { index: 1 },
  )();

  return styles;
};
