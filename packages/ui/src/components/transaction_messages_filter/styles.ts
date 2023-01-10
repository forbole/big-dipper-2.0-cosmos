import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  filterLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  filterIcon: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    marginRight: theme.spacing(1),
  },
  select: {
    display: 'flex',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.custom.general.surfaceTwo,
    color: theme.palette.custom.fonts.fontThree,
    '& .MuiSelect-icon': {
      color: theme.palette.custom.fonts.fontThree,
      right: '6px',
    },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingLeft: theme.spacing(2),
      '& .MuiTypography-body1': {
        marginRight: theme.spacing(2),
      },
    },
    [theme.breakpoints.up('lg')]: {
      display: 'inline-flex',
    },
  },
  item: {
    color: theme.palette.custom.fonts.fontThree,
  },
}));

export default useStyles;
