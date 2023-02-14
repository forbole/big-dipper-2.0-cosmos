import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {},
  tag: {
    '& .MuiTypography-body1': {
      lineHeight: 1,
    },
  },
  bio: {
    display: 'flex',
    '& .bio__header': {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    '& .bio__content': {
      marginTop: theme.spacing(2),
      color: theme.palette.custom.fonts.fontTwo,
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(1),
      },
    },
  },
  avatar: {
    width: '60px',
    height: '60px',
    minHeight: '60px',
    minWidth: '60px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    '& .header__content': {
      marginLeft: theme.spacing(1),
    },
    '& .MuiTypography-h2': {
      marginBottom: theme.spacing(1),
    },
    [theme.breakpoints.up('lg')]: {
      '& .header__content': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 0,
        '& .MuiTypography-h2': {
          marginRight: theme.spacing(2),
          marginBottom: 0,
        },
      },
    },
  },
  desktopHeader: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& .MuiTypography-h2': {
        marginRight: theme.spacing(2),
      },
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(4, 0),
    },
  },
  item: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
    '& .label': {
      marginBottom: theme.spacing(1),
      color: theme.palette.custom.fonts.fontThree,
      '&.condition': {
        display: 'flex',
        alignItems: 'center',
      },
      [theme.breakpoints.up('lg')]: {
        marginBottom: 0,
      },
    },
    '& .condition__body': {
      justifySelf: 'flex-start',
    },
    '& p.value': {
      color: theme.palette.custom.fonts.fontTwo,
      '&.good': {
        color: theme.palette.custom.condition.one,
      },
      '&.moderate': {
        color: theme.palette.custom.condition.two,
      },
      '&.bad': {
        color: theme.palette.custom.condition.three,
      },
      '&.condition': {
        color: theme.palette.custom.condition.zero,
      },
    },
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },

    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: '200px auto',
      gap: theme.spacing(2),
      alignItems: 'center',
    },
  },
  copyText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& svg': {
      width: '1rem',
      marginLeft: theme.spacing(1),
    },
  },
}));

export default useStyles;
