import {
  makeStyles,
} from '@material-ui/styles';

export const useGetStyles = () => {
  const useStyles = makeStyles(() => {
    return (
      {
        root: {
          '& .media': {
            margin: '0 0.5rem',
            '&:first-child': {
              marginLeft: 0,
            },
            '&:last-child': {
              marginRight: 0,
            },
            '& path': {
              transition: 'all 0.3s ease',
              fill: 'rgba(153, 153, 153, 1)',
            },
            '&:hover': {
              '& path': {
                fill: 'rgba(153, 153, 153, 0.2)',
              },
            },
          },
        },
      });
  });
  return {
    classes: useStyles(),
  };
};
