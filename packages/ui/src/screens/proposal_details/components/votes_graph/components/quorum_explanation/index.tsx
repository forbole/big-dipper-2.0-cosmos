import { useStyles } from '@/screens/proposal_details/components/votes_graph/components/quorum_explanation/styles';
import Typography from '@material-ui/core/Typography';
import Trans from 'next-translate/Trans';

const QuorumExplanation = (props: { quorum: string }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>
        <Trans
          i18nKey="proposals:quorumExplanation"
          components={[<b />]}
          values={{
            quorum: props.quorum,
          }}
        />
      </Typography>
    </div>
  );
};

export default QuorumExplanation;
