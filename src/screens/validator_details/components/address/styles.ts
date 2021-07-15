import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
          },
        },
        actionIcons: {
          '&:hover': {
            cursor: 'pointer',
          },
        },
        icons: {
          '& svg': {
            width: theme.spacing(4.5),
            height: theme.spacing(4.5),
          },
        },
        item: {
          padding: theme.spacing(2, 0),
          color: theme.palette.custom.fonts.fontTwo,
          '&:first-child': {
            paddingTop: 0,
          },
          '&:last-child': {
            paddingBottom: 0,
          },
          '&:not(:last-child)': {
            borderBottom: `solid 1px ${theme.palette.divider}`,
          },
          '& .label': {
            marginBottom: theme.spacing(1),
          },
          '& .detail': {
            '&.MuiTypography-body1': {
              wordWrap: 'break-word',
            },
          },
          '& a': {
            color: theme.palette.custom.fonts.highlight,
            // '&:hover': {
            //   cursor: 'pointer',
            // },
          },
          [theme.breakpoints.up('md')]: {
            padding: 0,
            '&:not(:last-child)': {
              borderBottom: 'none',
            },
            '& .label': {
              marginBottom: 0,
            },
          },
        },
        copyText: {
          '& .detail': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            '& svg': {
              width: '1rem',
              marginLeft: theme.spacing(1),
            },
          },
        },
      });
    },
  )();

  return styles;
};
