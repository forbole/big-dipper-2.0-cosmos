import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          height: '100%',
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
        cell: {
          ...theme.mixins.tableCell,
          '&.sort:hover': {
            cursor: 'pointer',
          },
        },
        flexCells: {
          '& > *': {
            display: 'flex',
            alignItems: 'center',
          },
          '&.right': {
            '& > *': {
              justifyContent: 'flex-end',
            },
          },
          '&.center': {
            '& > *': {
              justifyContent: 'center',
            },
          },
        },
        body: {
          color: theme.palette.custom.fonts.fontTwo
        },
      });
    },
  )();

  return styles;
};
