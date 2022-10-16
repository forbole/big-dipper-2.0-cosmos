import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: theme.spacing(3, 2, 0),
        },
        a: {
          lineHeight: 0,
          zIndex: 200,
        },
        logo: {
          width: '120px',
          '&:hover': {
            cursor: 'pointer',
          },
        },
        actions: {
          display: 'flex',
          alignItems: 'center',
          minWidth: 0,
        },
        network: {
          zIndex: 150,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '0 0.3rem 0 0.7rem',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          '&:hover': {
            cursor: 'pointer',
          },
          '& .text': {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          },
        },
        hamburger: {
          zIndex: 200,
          width: '20px',
          '&:hover': {
            cursor: 'pointer',
          },
          '&:before, &:after, & .hamburger-content': {
            content: '""',
            backgroundColor: theme.palette?.custom.general.icon,
            borderRadius: '10px',
            display: 'block',
            height: '2px',
            margin: '4px 0',
            transition: 'all 0.4s ease-in-out',
          },
          '&.active': {
            '&:before': {
              transform: 'translateY(7px) rotate(137deg)',
            },
            '&:after': {
              transform: 'translateY(-5px) rotate(-140deg)',
            },
            '& .hamburger-content': {
              transform: 'scale(0)',
            },
          },
        },
      });
    },
  )();

  return styles;
};
