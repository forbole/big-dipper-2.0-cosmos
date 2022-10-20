import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          marginBottom: theme.spacing(2),
          marginTop: theme.spacing(2),
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
          '& p.change': {
            '&.positive': {
              '&:before': {
                content: '"+"',
              },
              color: theme.palette.custom.priceData.positive,
            },
            '&.negative': {
              color: theme.palette.custom.priceData.negative,
            },
          },
        },
        flex: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
      });
    },
  )();

  return styles;
};
