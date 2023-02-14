import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    minHeight: '200px',
    overflow: 'hidden',
    flexFlow: 'column nowrap',
  },
  pagination: {
    '&&': {
      borderTop: `1px solid ${theme.palette.divider}`,
    },
    '&& .MuiTablePagination-toolbar': {
      minHeight: 'auto',
      height: 'auto',
      padding: theme.spacing(1, 0),
      display: 'flex',
    },
    '&& .MuiTablePagination-displayedRows': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  paginationActions: {
    '&&': {
      justifyContent: 'flex-end',
      flexShrink: 2,
    },
    '&& .MuiPagination-root': {
      width: 'auto',
    },
    '&& .MuiPagination-ul': {
      flexWrap: 'nowrap',
    },
  },
  th: {
    '&&': {
      background: theme.palette.background.paper,
      height: 'auto',
      padding: 0,
    },
  },
  listContainer: {
    '&&': {
      position: 'relative',
      overflow: 'hidden',
      flex: 1,
    },
  },
  list: {
    '&&': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 1,
    },
    /* to hide the loading in the background */
    '&& > div > div > *:last-of-type:after': {
      content: '""',
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: -1,
      background: theme.palette.background.paper,
    },
  },
  listBg: {
    '&&': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    '&& > span': {
      width: '60%',
    },
  },
  notfound: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 1,
    background: theme.palette.background.paper,
  },
}));

export default useStyles;
