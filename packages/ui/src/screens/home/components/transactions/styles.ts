import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    '& .button': {
      color: theme.palette.custom.fonts.fontTwo,
      '&:hover': {
        cursor: 'pointer',
      },
    },
  },
  label: {
    marginBottom: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeMoreFooter: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default useStyles;
