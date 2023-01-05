import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    minHeight: '50vh',
    height: '800px',
  },
  cell: {
    ...(theme.mixins.tableCell as CSSObject),
  },
  body: {
    color: theme.palette.custom.fonts.fontTwo,
  },
  actionIcons: {
    '&:hover': {
      cursor: 'pointer',
    },
    width: '1rem',
    marginLeft: theme.spacing(1),
  },
  emailIcon: {
    '&:hover': {
      cursor: 'pointer',
    },
    width: '1.5rem',
  },
}));

export default useStyles;
