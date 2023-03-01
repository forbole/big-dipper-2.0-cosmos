import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    '&:-webkit-scrollbar': {
      display: 'block',
    },
  },
  cell: {
    ...(theme.mixins.tableCell as CSSObject),
  },
  header: {
    ...(theme.mixins.tableCell as CSSObject),
    background: theme.palette.custom.general.modal_header,
    color: theme.palette.custom.fonts.table_headers,
    textTransform: 'uppercase',
  },
  body: {
    color: theme.palette.custom.fonts.fontTwo,
  },
}));

export default useStyles;
