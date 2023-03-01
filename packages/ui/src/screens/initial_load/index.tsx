import LinearProgress from '@mui/material/LinearProgress';
import useStyles from '@/screens/initial_load/styles';
import LogoFull from '@/assets/logo-full.svg';

const InitialLoad = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div className={classes.logo}>
          <LogoFull />
        </div>
        <LinearProgress className={classes.divider} />
      </div>
    </div>
  );
};

export default InitialLoad;
