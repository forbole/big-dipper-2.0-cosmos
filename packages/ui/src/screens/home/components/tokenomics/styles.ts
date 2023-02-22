import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    // justifyContent: 'center',
    // flexDirection: 'column',
  },
  label: {
    marginBottom: theme.spacing(2),
  },
  data: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .data__item': {
      width: '50%',
      whiteSpace: 'pre-wrap',
      '& h4': {
        color: theme.palette.custom.fonts.fontTwo,
      },
      '& .MuiTypography-caption': {
        color: theme.palette.custom.fonts.fontThree,
      },
    },
    '& .data__item:last-child': {
      textAlign: 'right',
    },
  },
  legends: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
    '& .MuiTypography-caption': {
      color: theme.palette.custom.fonts.fontThree,
    },
    '& .legends__item': {
      width: '50%',
      '&:before': {
        content: '""',
        display: 'inline-block',
        width: '12px',
        height: '12px',
        marginRight: '5px',
      },
      '&:first-of-type:before': {
        background: theme.palette.custom.tokenomics.one,
      },
      '&:nth-of-type(2):before': {
        background: theme.palette.custom.tokenomics.two,
      },
      '&:last-child:before': {
        background: theme.palette.custom.tokenomics.three,
      },
      '& .caption__percent': {
        color: theme.palette.custom.fonts.fontThree,
      },
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
    height: '100%',
  },
}));

export default useStyles;
