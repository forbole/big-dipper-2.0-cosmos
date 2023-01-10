import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  addressRoot: {
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
    },
  },
  actionIcons: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  icons: {
    '& svg': {
      width: theme.spacing(4.5),
      height: theme.spacing(4.5),
    },
  },
  item: {
    padding: theme.spacing(2, 0),
    color: theme.palette.custom.fonts.fontTwo,
    '&:first-of-type': {
      paddingTop: 0,
    },
    '&:last-child': {
      paddingBottom: 0,
    },
    '&:not(:last-child)': {
      borderBottom: `solid 1px ${theme.palette.divider}`,
    },
    '& .label': {
      marginBottom: theme.spacing(1),
    },
    '& .detail': {
      '&.MuiTypography-body1': {
        wordWrap: 'break-word',
      },
    },
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('md')]: {
      padding: 0,
      '&:not(:last-child)': {
        borderBottom: 'none',
      },
      '& .label': {
        marginBottom: 0,
      },
    },
  },
  copyText: {
    '& .detail': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row-reverse',
      justifyContent: 'flex-end',
      '& svg': {
        width: '1rem',
        marginLeft: theme.spacing(1),
      },
    },
  },
  statusRoot: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('lg')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
  },
  statusItem: {
    '& .label': {
      marginBottom: theme.spacing(1),
      color: theme.palette.custom.fonts.fontThree,
      '&.condition': {
        display: 'flex',
        alignItems: 'center',
      },
      '&.liquidStaking': {
        display: 'flex',
        alignItems: 'center',
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
  },
  statusTag: {
    '& .MuiTypography-body1': {
      lineHeight: 1,
    },
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

export default useStyles;
