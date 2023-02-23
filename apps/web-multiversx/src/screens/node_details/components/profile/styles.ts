import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  topWrapper: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  nametag: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      '& .name': {
        lineHeight: 1,
        marginRight: theme.spacing(1),
      },
      '& .version': {
        color: theme.palette.custom.fonts.fontThree,
      },
    },
  },
  rating: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block',
      color: theme.palette.custom.primaryData.one,
    },
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  addresses: {
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
}));

export default useStyles;
