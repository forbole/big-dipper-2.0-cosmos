import Typography from '@mui/material/Typography';
import TransByApp from '@/components/TransByApp';
import useStyles from '@/screens/validators/components/list/components/voting_power_explanation/styles';

const VotingPowerExplanation = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <TransByApp i18nKey="validators:votingPowerExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default VotingPowerExplanation;
