import { makeStyles } from '@material-ui/core/styles';

export const useStyles = (coverUrl?: string) => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          overflow: 'hidden',
        },
        cover: {
          height: '125px',
          background: theme.palette.custom.tags.zero,
          backgroundImage: `url(${coverUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          // background: 'pink',
          margin: theme.spacing(-2, -2, 0, -2),
          overflow: 'hidden',
          // position: 'relative',
          '& img': {
            width: '100%',
            height: '200px',
            objectFit: 'cover',

          },
        },
        avatar: {
          // position: 'absolute',
          width: '75px',
          height: '75px',
          minHeight: '75px',
          minWidth: '75px',
          marginTop: theme.spacing(-3),
          border: `solid 3px ${theme.palette.background.paper}`,

          // zIndex: 1000,
        },
        // link: {
        //   color: theme.palette.custom.fonts.highlight,
        //   '&:hover': {
        //     cursor: 'pointer',
        //   },
        // },
        // profile: {
        //   display: 'flex',
        //   alignItems: 'center',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   [theme.breakpoints.up('md')]: {
        //     flexDirection: 'row',
        //     justifyContent: 'flex-start',
        //   },
        // },
        // tag: {
        //   alignSelf: 'flex-end',
        //   '&:not(:last-child)': {
        //     marginRight: 0,
        //   },
        //   '&.tablet': {
        //     marginLeft: theme.spacing(2),
        //   },
        // },
        // avatar: {
        //   width: '60px',
        //   height: '60px',
        //   minHeight: '60px',
        //   minWidth: '60px',
        // },
        // description: {
        //   flex: 1,
        //   textAlign: 'center',
        //   marginTop: theme.spacing(1),
        //   '& .tag': {
        //     color: theme.palette.custom.fonts.fontFour,
        //   },
        //   [theme.breakpoints.up('md')]: {
        //     textAlign: 'left',
        //     marginTop: 0,
        //     marginLeft: theme.spacing(2),
        //     display: 'flex',
        //     alignItems: 'flex-end',
        //     justifyContent: 'space-between',
        //   },
        // },
        // divider: {
        //   visibility: 'hidden',
        //   margin: theme.spacing(0.5, 0),
        //   [theme.breakpoints.up('md')]: {
        //     visibility: 'visible',
        //     margin: theme.spacing(2, 0),
        //   },
        // },
        // validatorStatus: {
        //   '&.mobile': {
        //     [theme.breakpoints.up('md')]: {
        //       display: 'none',
        //     },
        //   },
        //   '&.tablet': {
        //     display: 'none',
        //     [theme.breakpoints.up('md')]: {
        //       display: 'block',
        //     },
        //   },
        // },
        // nicknameWrapper: {
        //   [theme.breakpoints.up('md')]: {
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //   },
        // },
        // validatorDetails: {
        //   margin: theme.spacing(1, 0, 2),
        //   display: 'grid',
        //   gridTemplateColumns: 'repeat(2, 1fr)',
        //   gridTemplateRows: 'auto',
        //   gridGap: theme.spacing(2),
        //   [theme.breakpoints.up('md')]: {
        //     gridTemplateColumns: 'repeat(4, 1fr)',
        //   },
        // },
        // item: {
        //   '& .label': {
        //     marginBottom: theme.spacing(1),
        //     color: theme.palette.custom.fonts.fontThree,
        //     '&.condition': {
        //       display: 'flex',
        //       alignItems: 'center',
        //     },
        //   },
        //   '& .condition__body': {
        //     justifySelf: 'flex-start',
        //   },
        //   '& p.value': {
        //     color: theme.palette.custom.fonts.fontTwo,
        //     display: 'inline-block',
        //     '&.good': {
        //       color: theme.palette.custom.condition.one,
        //     },
        //     '&.moderate': {
        //       color: theme.palette.custom.condition.two,
        //     },
        //     '&.bad': {
        //       color: theme.palette.custom.condition.three,
        //     },
        //     '&.condition': {
        //       color: theme.palette.custom.condition.zero,
        //     },
        //   },
        //   '& a': {
        //     color: theme.palette.custom.fonts.highlight,
        //   },

        //   '&.last-seen': {
        //     gridColumn: '1/3',
        //     [theme.breakpoints.up('md')]: {
        //       gridColumn: '3/5',
        //     },
        //   },
        // },
      });
    },
    { index: 1 },
  )();

  return styles;
};
