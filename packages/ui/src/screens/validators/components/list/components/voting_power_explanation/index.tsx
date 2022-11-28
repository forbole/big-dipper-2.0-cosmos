import { useStyles } from '@/screens/validators/components/list/components/voting_power_explanation/styles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';

const VotingPowerExplanation = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans i18nKey="validators:votingPowerExplanation" components={[<b />]} />
      </Typography>
    </div>
  );
};

export default VotingPowerExplanation;
