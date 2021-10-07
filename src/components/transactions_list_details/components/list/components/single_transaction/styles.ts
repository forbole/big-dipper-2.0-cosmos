import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
        },
        timeContainer: {
          background: theme.palette.custom.general.surfaceTwo,
          padding: theme.spacing(1, 2),
          color: theme.palette.custom.fonts.fontTwo,
        },
        itemContainer: {
          padding: theme.spacing(2, 2, 1),
        },
        itemPrimaryDetailsContainer: {
          background: 'green',
        },
        item: {
          marginBottom: theme.spacing(2),
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
        },
        flex: {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
        divider: {
          margin: theme.spacing(2, 0),
        },
        msgListContainer: {
          marginTop: theme.spacing(2),
        },
        tags: {
          marginBottom: theme.spacing(2),
        },
      });
    },
  )();

  return styles;
};
