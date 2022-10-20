import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {

        },
        title: {
          marginBottom: theme.spacing(2),
        },
        block: {
          wordBreak: 'break-all',
          flex: 1,
        },
        divider: {
          margin: theme.spacing(2, 0),
        },
        listContainer: {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridGap: theme.spacing(2),
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
        },
        item: {
          overflow: 'hidden',
        },
        hash: {
          display: 'flex',
          justifyContent: 'center',
        },
        bullet: {
          width: '3px',
          borderRadius: '20%',
          background: theme.palette.custom.primaryData.two,
          marginRight: theme.spacing(1),
        },
      });
    },
  )();

  return styles;
};
