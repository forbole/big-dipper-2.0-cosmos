import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.custom.general.modal_net_selector,
    borderRadius: 4,
    padding: '8px 16px',
    [theme.breakpoints.down(1025)]: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      height: '100%',
      padding: theme.spacing(2),
      margin: theme.spacing(1, 1.5, 0, 1.5),
      justifySelf: 'flex-end',
      width: 'auto',
      gap: 30,
      backgroundColor: theme.palette.custom.general.net_selector,
    },
    '&.open-menu-margin': {
      marginBottom: theme.spacing(27.5),
    },
    cursor: 'pointer',
    '& .netIcon': {
      [theme.breakpoints.down(1025)]: {
        position: 'relative',
        left: 'auto',
      },
    },
    '& .netContent': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
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
        color: theme.palette.custom.fonts.netSelector_label,
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '21px',
        marginLeft: 16,
        marginRight: 20,
        [theme.breakpoints.down(1025)]: {
          margin: 0,
          fontWeight: 600,
          fontSize: 10,
          lineHeight: '15px',
          color: theme.palette.custom.fonts.settings_label,
        },
      },
      '& .currentNetLink': {
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '18px',
        color: theme.palette.custom.fonts.netSelector_link,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
      },
    },
    '& .arrowIcon': {
      position: 'relative',
      transform: 'rotate(0deg)',
      transition: 'all 0.3s ease',
      '&.modalShow': {
        transform: 'rotate(90deg)',
      },
      [theme.breakpoints.down(1025)]: {
        position: 'absolute',
        right: theme.spacing(1.5),
      },
    },
    '& .modal': {
      position: 'fixed',
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
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 4,
      justifyContent: 'center',
      backgroundColor: theme.palette.custom.general.modal_net_selector,
      padding: 12,
      right: 16,
      top: 72,
      boxShadow: '-6px 5px rgba(0, 0, 0, 0.25)',
      [theme.breakpoints.down(1025)]: {
        position: 'absolute',
        width: '100%',
        height: 'fit-content',
        top: 'calc(100% + 8px)',
        right: 0,
        left: 'auto',
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
          color: theme.palette.custom.fonts.fontOne,
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
