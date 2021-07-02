import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        closeButton: {
          position: 'absolute',
          right: theme.spacing(1),
          top: theme.spacing(1),
          color: theme.palette.grey[500],
        },
        header: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          '& .MuiIconButton-root': {
            padding: 0,
          },
        },
        dialog: {
          '& .MuiDialog-paper': {
            width: '500px',
          },
        },
        formItem: {
          marginBottom: theme.spacing(2),
          '& .MuiOutlinedInput-root': {
            width: '100%',
          },
          '& .form-item--label': {
            marginBottom: theme.spacing(1),
          },
          // display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'flex-start',
        },
        // menu: {
        //   '& .MuiMenu-list': {
        //     padding: 0,
        //   },
        // },
        // selected: {
        //   display: 'flex',
        //   justifyContent: 'flex-end',
        //   alignItems: 'center',
        //   '&:hover': {
        //     cursor: 'pointer',
        //   },
        //   '& svg': {
        //     marginRight: theme.spacing(0.5),
        //   },
        // },
      });
    },
  )();

  return styles;
};
