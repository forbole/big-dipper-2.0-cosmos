import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          margin: 0,
          listStyleType: 'none',
          '& .MuiIconButton-root, & .MuiInputBase-input': {
            background: theme.palette.custom.general.surfaceTwo,
          },
          '& li': {
            margin: theme.spacing(0, 0.5),
            '&.last': {
              marginRight: 0,
              marginLeft: '3px',
            },
            '&.first': {
              marginLeft: 0,
              marginRight: '3px',
            },
          },
          [theme.breakpoints.up('md')]: {
            alignSelf: 'flex-end',
          },
        },
        button: {
          height: '30px',
          width: '30px',
          borderRadius: theme.shape.borderRadius,
          padding: theme.spacing(1),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        pageButton: {
          color: theme.palette.custom.fonts.fontThree,
          '&.selected': {
            color: theme.palette.primary.contrastText,
            background: theme.palette.primary.main,
            '&:hover': {
              cursor: 'initial',
            },
          },
          '&:hover': {
            cursor: 'pointer',
          },
        },
        prev: {
          transform: 'rotate(180deg)',
        },
        rowSelection: {
          '& .MuiInputBase-input': {
            padding: 0,
          },
          '& .MuiTypography-body2': {
            color: theme.palette.custom.fonts.fontThree,
          },
          '& .MuiSelect-selectMenu': {
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: theme.shape.borderRadius,
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(3),
          },
        },
        menuItem: {
          '& .MuiTypography-body2': {
            color: theme.palette.custom.fonts.fontThree,
          },
        },
        tablet: {
          display: 'none',
          [theme.breakpoints.up('md')]: {
            display: 'inline-block',
          },
        },
      });
    },
  )();

  return styles;
};
