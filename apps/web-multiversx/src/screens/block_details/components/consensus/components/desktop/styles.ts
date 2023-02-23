import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
  },
  cell: {
    ...(theme.mixins.tableCell as CSSObject),
  },
  body: {
    color: theme.palette.custom.fonts.fontTwo,
  },
}));

export default useStyles;
