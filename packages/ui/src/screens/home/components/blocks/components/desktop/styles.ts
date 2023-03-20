import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
  header: {
    // ...theme.mixins.tableCell,
    background: theme.palette.custom.general.modal_header,
    color: theme.palette.custom.fonts.table_headers,
    textTransform: 'uppercase',
  },
  table: {
    '& .MuiTableBody-root': {
      overflow: 'hidden',
      '& .MuiTableRow-root': {
        '& .MuiTableCell-root': {
          '&:last-child': {
            minWidth: 100,
          },
        },
      },
      '& .MuiTableCell-root': {
        whiteSpace: 'nowrap',
        height: 'auto',
      },
    },
  },
}));

export default useStyles;
