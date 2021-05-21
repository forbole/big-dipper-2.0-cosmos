import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          [theme.breakpoints.up('lg')]: {
            display: 'flex',
            alignItems: 'center',
          },
        },
        pie: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        legend: {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridGap: theme.spacing(2),
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            flex: 1,
            marginLeft: theme.spacing(4),
          },
        },
        total: {
          [theme.breakpoints.up('md')]: {
            gridColumn: '1/3',
          },
        },
        voteItem: {
          position: 'relative',
          paddingLeft: '10px',
          '&::before': {
            content: '""',
            display: 'block',
            width: '5px',
            background: 'pink',
            height: '100%',
            position: 'absolute',
            borderRadius: theme.shape.borderRadius,
            left: 0,

          },
          '&.yes': {
            '&::before': {
              background: '#355070',
            },
          },
          '&.no': {
            '&::before': {
              background: '#6d597a',
            },
          },
          '&.veto': {
            '&::before': {
              background: '#b56576',
            },
          },
          '&.abstain': {
            '&::before': {
              background: '#e56b6f',
            },
          },
        },
      });
    },
  )();

  return styles;
};
