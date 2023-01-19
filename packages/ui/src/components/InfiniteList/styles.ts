import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    '&&': {
      minHeight: '400px',
      maxHeight: 'calc(100vh - 120px)',
      overflow: 'hidden',
      width: '100%',
    },
  },
  pagination: {
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
      width: '100%',
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
      background: theme.palette.background.default,
      height: 'auto',
      padding: 0,
    },
  },
  listContainer: {
    '&&': {
      height: 'calc(100% - 100px)',
      position: 'relative',
      overflow: 'hidden',
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
