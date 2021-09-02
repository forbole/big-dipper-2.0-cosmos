import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        tag: {
          '& .MuiTypography-body1': {
            lineHeight: 1,
          },
        },
        item: {
          '&:not(:last-child)': {
            marginBottom: theme.spacing(2),
          },
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
            '&.condition': {
              display: 'flex',
              alignItems: 'center',
            },
            [theme.breakpoints.up('lg')]: {
              marginBottom: 0,
            },
          },
          '& .condition__body': {
            justifySelf: 'flex-start',
          },
          '& p.value': {
            color: theme.palette.custom.fonts.fontTwo,
            '&.good': {
              color: theme.palette.custom.condition.one,
            },
            '&.moderate': {
              color: theme.palette.custom.condition.two,
            },
            '&.bad': {
              color: theme.palette.custom.condition.three,
            },
            '&.condition': {
              color: theme.palette.custom.condition.zero,
            },
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
          },

          [theme.breakpoints.up('lg')]: {
            display: 'grid',
            gridTemplateColumns: '200px auto',
            gridGap: theme.spacing(2),
            alignItems: 'center',
          },
        },
        copyText: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& svg': {
            width: '1rem',
            marginLeft: theme.spacing(1),
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
