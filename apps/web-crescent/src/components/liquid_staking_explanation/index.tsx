import Typography from '@mui/material/Typography';
import AppTrans from '@/components/AppTrans';
import useStyles from '@/components/liquid_staking_explanation/styles';

const LiquidStakingExplanation = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <AppTrans i18nKey="validators:liquidStakingExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default LiquidStakingExplanation;
