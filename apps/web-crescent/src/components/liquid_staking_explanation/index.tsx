import useStyles from '@/components/liquid_staking_explanation/styles';
import Typography from '@mui/material/Typography';
import Trans from 'next-translate/Trans';

const LiquidStakingExplanation = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans i18nKey="validators:liquidStakingExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default LiquidStakingExplanation;
