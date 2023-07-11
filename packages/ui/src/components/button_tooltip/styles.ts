import { makeStyles } from 'tss-react/mui';
import Color from 'color';
import { tooltipClasses } from '@mui/material/Tooltip';

const useStyles = makeStyles()((theme) => ({
  tooltip: {
    [`& .${tooltipClasses.arrow}`]: {
        color: theme?.palette.custom?.general.surfaceTwo,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        background: theme?.palette.custom?.general.surfaceTwo,
        maxWidth: '700px',
    },
  },
  root: {
    padding: theme.spacing(2),
    background: Color(theme.palette.background.paper).alpha(0.9).string(),
  },
  popper: {
    "& .MuiTooltip-tooltip": {
      maxWidth: '700px', 
    },
  },
  highlightText: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(2),
    fontWeight: 700,
  },
  textWithIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
