import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import useStyles from '@/components/liquid_staking_explanation/styles';

const LiquidStakingExplanation = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <TransByApp i18nKey="validators:liquidStakingExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default LiquidStakingExplanation;
