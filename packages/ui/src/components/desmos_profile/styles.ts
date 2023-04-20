import { makeStyles } from 'tss-react/mui';
import chainConfig from '@/chainConfig';

const { chainName } = chainConfig();

// TODO jss-to-tss-react codemod: Unable to handle style definition reliably. ArrowFunctionExpression in CSS prop.
const useStyles = makeStyles<{ coverUrl?: string }>()((theme, { coverUrl }) => ({
  root: {
    overflow: 'hidden',
    '& a': {
      color: '#0075FF',
      textDecoration: 'none',
    },
  },
  cover: {
    height: '150px',
    background: theme.palette.custom.fonts.fontFour,
    backgroundImage: `url("${`/${chainName}`.replace(
      /^\/$/,
      ''
    )}/images/default_cover_pattern.png")`,
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center center',
    margin: theme.spacing(-2, -2, 0, -2),
    overflow: 'hidden',
    backgroundSize: 'contain',
    '& .cover': {
      width: '100%',
      height: '100%',
      backgroundImage: `url(${coverUrl})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    },
    [theme.breakpoints.up('sm')]: {
      height: '100px',
    },
    [theme.breakpoints.up('md')]: {
      height: '120px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '160px',
    },
  },
  avatarContainer: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
    flexDirection: 'column',
    '& .hide': {
      visibility: 'hidden',
    },
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      paddingBottom: theme.spacing(3.5),
      alignItems: 'center',
      flexDirection: 'row',
    },
  },
  avatar: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    minHeight: '60px',
    minWidth: '60px',
    border: `solid 3px ${theme.palette.background.paper}`,
    top: theme.spacing(-2.5),
    left: 0,
    [theme.breakpoints.up('md')]: {
      width: '76px',
      height: '76px',
      minHeight: '76px',
      minWidth: '76px',
      top: theme.spacing(-3),
      borderWidth: '4px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100px',
      height: '100px',
      minHeight: '100px',
      minWidth: '100px',
      top: theme.spacing(-4),
      borderWidth: '5px',
    },
  },
  link: {
    color: '#0075FF!important' as any,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  nicknameWrapper: {
    margin: theme.spacing(0.5, 0),
    paddingLeft: '60px',
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(1, 0),
      paddingLeft: '85px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '116px',
    },
    '& .tag': {
      color: theme.palette.custom.fonts.fontFour,
    },
  },
  addressBox: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '30%',
    },
  },
  address: {
    background: '#282828',
    borderRadius: theme.spacing(1, 1, 0, 0),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: theme.spacing(1, 2),
    // width: '30%'
  },
  rewardAddress: {
    marginTop: 1,
    background: '#282828',
    borderRadius: theme.spacing(0, 0, 1, 1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: theme.spacing(1, 2),
    // width: '30%'
  },
  addressAndCopy: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    '& span': {
      paddingRight: theme.spacing(1),
    },
  },
  actionIcons: {
    '&:hover': {
      cursor: 'pointer',
    },
    width: theme.spacing(2),
    height: theme.spacing(2),
  },
  infoDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: `${theme.spacing(1, 0, 1, 0)}!important` as any,
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: `${theme.spacing(2, 0, 2, 0)}!important` as any,
    },
    a: {
      paddingLeft: 3,
      fontSize: theme.spacing(1.75),
    },
  },
  flexDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(0, 0, 1, 0),
    '&:first-child': {
      paddingTop: 0,
    },
    '&:last-child': {
      paddingBottom: 0,
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 2, 0, 0),
      '&:last-child': {
        paddingRight: 0,
      },
    },
    p: {
      paddingLeft: 5,
      fontWeight: 600,
      fontSize: theme.spacing(1.75),
      color: theme.palette.custom.fonts.fontFour,
    },
  },
  icon: {
    fill: 'none',
  },
}));

export default useStyles;
