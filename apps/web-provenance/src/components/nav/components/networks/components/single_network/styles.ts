import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          width: '100%',
        },
        item: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: theme.spacing(3, 0),
          '& p': {
            flex: 1,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            marginRight: theme.spacing(1),
          },
        },
        status: {
          padding: theme.spacing(0.5, 1),
          color: 'white',
          borderRadius: theme.shape.borderRadius,
          background: theme.palette.custom.general.icon,
          '&.retired': {
            background: theme.palette.custom.primaryData.four,
          },
          '&.testnet': {
            background: theme.palette.custom.primaryData.three,
          },
          '&.mainnet': {
            background: theme.palette.primary.main,
          },
        },
      });
    },
  )();

  return styles;
};
