import {
  makeStyles,
} from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'auto',
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },
        },
        table: {
          '& .MuiTableBody-root': {
            '& .MuiTableCell-root': {
              whiteSpace: 'nowrap',
            },
          },
        },
        copyContainer: {
          display: 'flex',
          justifyContent: 'start',
          gap: '10px',
          alignItems: 'center',
          cursor: 'pointer',

          '&:hover': {
            '& div': {
              opacity: 1,
            },
          },
        },
        copyPopup: {
          fontSize: 12,
          opacity: 0,
          display: 'flex',
          gap: '2px',
          alignItems: 'center',
        },
        copySuccess: {
          color: 'green',
        },
      });
    },
  )();

  return styles;
};
