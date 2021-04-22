import { makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          '& .MuiTypography-h2': {
            marginBottom: theme.spacing(2),
          },
        },
        blocks: {
          display: 'flex',
          flexWrap: 'wrap',
          margin: theme.spacing(-0.25),
        },
        singleBlock: {
          width: '28px',
          height: '28px',
          borderRadius: '2px',
          background: theme.palette.custom.general.surfaceTwo,
          margin: theme.spacing(0.25),
          '&:hover': {
            background: Color(theme.palette.custom.tags.zero).alpha(0.5).string(),
          },
          '&.signed': {
            background: theme.palette.primary.main,
            '&:hover': {
              background: Color(theme.palette.primary.main).alpha(0.5).string(),
            },
          },
          [theme.breakpoints.up('md')]: {
            width: '32px',
            height: '32px',
          },
          [theme.breakpoints.up('lg')]: {
            width: '25px',
            height: '25px',
          },
        },
        toolTip: {
          boxShadow: theme.shadows[3],
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
          alignItems: 'center',
          justifyContent: 'flex-start',
          '& > div': {
            width: '50%',
          },
        },
      });
    }, { index: 1 },
  )();

  return styles;
};
