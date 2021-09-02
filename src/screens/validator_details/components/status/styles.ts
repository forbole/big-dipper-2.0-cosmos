import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 1fr)',
          gridGap: theme.spacing(2),
          [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
          },
          [theme.breakpoints.up('lg')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          },
        },
        tag: {
          '& .MuiTypography-body1': {
            lineHeight: 1,
          },
        },
        item: {
          '& .label': {
            marginBottom: theme.spacing(1),
            color: theme.palette.custom.fonts.fontThree,
            '&.condition': {
              display: 'flex',
              alignItems: 'center',
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
