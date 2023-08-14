import { makeStyles } from 'tss-react/mui';
import { tooltipClasses } from '@mui/material/Tooltip';

const useStyles = makeStyles()((theme) => ({
  tooltip: {
    [`& .${tooltipClasses.arrow}`]: {
      color: theme?.palette.divider,
    },
  },
  root: {
    padding: theme.spacing(2),
  },
  popper: {
    '& .MuiTooltip-tooltip': {
      maxWidth: '700px',
      backgroundColor: theme.palette.divider,
    },
  },
  alignSelf: {
    alignSelf: 'center',
  },
  accountText1: {
    color: theme.palette.custom.fonts.fontThree,
    fontSize: theme.spacing(2),
    display: 'block',
  },
  highlightTextSmall: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
  },
  accountText: {
    color: theme.palette.custom.fonts.fontThree,
    fontSize: theme.spacing(2),
  },
  accountTextEnd: {
    color: theme.palette.custom.fonts.fontThree,
    fontSize: theme.spacing(2),
    paddingRight: theme.spacing(1.5),
  },
  highlightText: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
    fontWeight: 700,
  },
  textWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingBottom: theme.spacing(1),
  },
  text: {
    color: theme.palette.custom.fonts.fontThree,
    fontSize: theme.spacing(2),
    paddingRight: theme.spacing(1.5),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 900,
    padding: theme.spacing(1),
  },
}));

export default useStyles;
