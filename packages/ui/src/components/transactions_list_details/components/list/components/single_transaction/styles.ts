import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  timeContainer: {
    background: theme.palette.custom.general.surfaceTwo,
    color: theme.palette.custom.fonts.fontTwo,
  },
  itemContainer: {
    padding: theme.spacing(2, 2, 1),
  },
  item: {
    gridColumn: '1/3',
    marginBottom: theme.spacing(2),
    '&.messages, &.result': {
      gridColumn: 'auto / span 1',
    },
    '& .label': {
      marginBottom: theme.spacing(1),
      color: theme.palette.custom.fonts.fontThree,
    },
    '& p.value': {
      color: theme.palette.custom.fonts.fontTwo,
    },
    '& a': {
      color: theme.palette.custom.fonts.highlight,
    },
    [theme.breakpoints.up('md')]: {
      '&.block, &.time': {
        gridColumn: 'auto / span 1',
      },
    },
    [theme.breakpoints.up('md')]: {
      gridColumn: 'auto / span 1',
    },
  },
  msgListContainer: {
    marginTop: theme.spacing(3),
  },
  msg: {
    '&:not(:last-child)': {
      marginBottom: theme.spacing(4),
    },
  },
  tags: {
    marginBottom: theme.spacing(2),
  },
  infoDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  innerDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: theme.spacing(1.5),
    div: {
      '&:not(:last-child)': {
        paddingBottom: theme.spacing(1),
      },
    },
  },
  iconFlexDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    a: {
      paddingRight: theme.spacing(1),
    },
  },
  icon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    fill: 'none',
  },
  dsmDiv: {
    fontSize: theme.spacing(2),
    fontWeight: 600,
  },
}));

export default useStyles;
