import { makeStyles } from 'tss-react/mui';
import { CSSObject } from 'tss-react';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
  },
}));

export default useStyles;
