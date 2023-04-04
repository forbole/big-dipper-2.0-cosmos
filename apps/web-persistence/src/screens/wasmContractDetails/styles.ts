import { CSSObject } from '@emotion/react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    ...(theme.mixins.layout as CSSObject),
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    display: 'grid',
    gridTemplateRows: 'auto auto 1fr',
    gridTemplateColumns: '1fr',
    gap: theme.spacing(1),
    [theme.breakpoints.up('lg')]: {
      gap: theme.spacing(2),
    },
  },
  signatures: {
    height: '450px',
    [theme.breakpoints.up('lg')]: {
      height: '450px',
    },
  },
  codeRoot: {
    height: '100%',
  },
  codeCell: {
    ...(theme.mixins.tableCell as CSSObject),
  },
  codeBody: {
    color: theme.palette.custom.fonts.fontTwo,
  },
  codeItem: {
    '& .detail': {
      width: '100%',
    },
  },
  codeBlock: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '5px',
    overflow: 'auto',
    maxWidth: '100%',
    maxHeight: '80vh',
    marginTop: '2rem',
    width: '100%',
    height: '500px',
  },
}));

export default useStyles;
