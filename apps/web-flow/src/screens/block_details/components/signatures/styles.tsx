import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles((theme) => {
    return {
      root: {
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTypography-h2': {
          paddingBottom: theme.spacing(2),
        },
      },
      wrapper: {
        flex: 1,
      },
      title: {
        marginBottom: theme.spacing(2),
      },
      content: {
        display: 'flex',
        background: theme.palette.background.default,
        overflow: 'auto',
        padding: '1rem',
        margin: '0',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      },
    };
  })();

  return styles;
};
