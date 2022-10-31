import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          margin: theme.spacing(2, 0),
        },
        item: {
          margin: theme.spacing(0, 2),
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: theme.spacing(2),
          '& .label': {
            marginBottom: theme.spacing(1),
            color: 'white',
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
          '& .status': {
            '&.one': {
              color: theme.palette.custom.tags.one,
            },
            '&.two': {
              color: theme.palette.custom.tags.two,
            },
            '&.three': {
              color: theme.palette.custom.tags.three,
            },
            '&.zero': {
              color: theme.palette.custom.tags.zero,
            },
          },
        },
        flex: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
      });
    },
  )();

  return styles;
};
