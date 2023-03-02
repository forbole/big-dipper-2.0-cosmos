import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    zIndex: 1201,
    width: 77,
    transition: theme.transitions.create('all', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&.active': {
      width: 200,
    },
    height: 55,
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: theme.palette.custom.general.net_selector,
    [theme.breakpoints.down(1025)]: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      height: '100%',
      padding: theme.spacing(2),
      margin: theme.spacing(1, 1.5, 0, 1.5),
      borderRadius: 4,
      justifySelf: 'flex-end',
      width: 'auto',
      gap: 30,
    },
    cursor: 'pointer',
    '& .netIcon': {
      position: 'absolute',
      left: 16,
      [theme.breakpoints.down(1025)]: {
        position: 'relative',
        left: 'auto',
      },
    },
    '& .netContent': {
      display: 'flex',
      paddingLeft: 49,
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s ease',
      '&.active': {
        opacity: 1,
        visibility: 'visible',
      },
      minWidth: 0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingRight: 30,
      [theme.breakpoints.down(1025)]: {
        visibility: 'visible',
        opacity: 1,
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        padding: 0,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '21px',
      },
      '& .currentNetName': {
        fontWeight: 600,
        fontSize: 10,
        lineHeight: '15px',
        color: theme.palette.custom.fonts.settings_label,
      },
      '& .currentNetLink': {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '18px',
        color: '#EEEEEE',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
      },
    },
    '& .arrowIcon': {
      position: 'absolute',
      right: 16,
      transform: 'rotate(90deg)',
      transition: 'all 0.3s ease',
      '&.modalShow': {
        transform: 'rotate(0)',
      },
      [theme.breakpoints.down(1025)]: {
        right: theme.spacing(1.5),
        transform: 'rotate(0deg)',
        '&.modalShow': {
          transform: 'rotate(90deg)',
        },
      },
    },
    '& .modal': {
      position: 'absolute',
      visibility: 'hidden',
      opacity: 0,
      transition: theme.transitions.create('all', {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.enteringScreen,
      }),
      '&.modalShow': {
        visibility: 'visible',
        opacity: 1,
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 4,
      justifyContent: 'center',
      backgroundColor: theme.palette.custom.general.nav_drawer,
      padding: 12,
      bottom: 8,
      left: 85,
      '&.active': {
        left: 208,
      },
      [theme.breakpoints.down(1025)]: {
        width: '100%',
        height: 'fit-content',
        top: 'calc(100% + 8px)',
        right: 0,
        left: 'auto',
        boxShadow: '-6px 5px rgba(0, 0, 0, 0.25)',
        padding: theme.spacing(1),
      },
      '& .linkItem': {
        width: 240,
        height: 55,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 4,
        padding: 12,
        transition: 'all 0.3s ease',
        [theme.breakpoints.down(1025)]: {
          width: '100%',
        },
        '&:hover': {
          backgroundColor: theme.palette.custom.general.net_selector,
        },
        '& .netName': {
          color: theme.palette.custom.fonts.settings_label,
          fontWeight: 600,
          fontSize: 10,
          lineHeight: '15px',
        },
        '& .netLink': {
          fontWeight: 400,
          fontSize: 12,
          lineHeight: '18px',
          color: '#EEEEEE',
        },
        '&.selectedItem': {
          backgroundColor: theme.palette.custom.general.modal_background,
          '& .netName': {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  },
}));

export default useStyles;
