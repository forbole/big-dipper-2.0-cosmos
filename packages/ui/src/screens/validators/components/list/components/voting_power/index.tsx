import Typography from '@mui/material/Typography';
import { FC } from 'react';
import useStyles from '@/screens/validators/components/list/components/voting_power/styles';

type VotingPowerProps = {
  className?: string;
  percentage: number;
  percentDisplay: string;
  content: string;
  topVotingPower: boolean;
};

const VotingPower: FC<VotingPowerProps> = ({
  className,
  percentage,
  content,
  percentDisplay,
  topVotingPower,
}) => {
  const { classes, cx } = useStyles({ percentage, topVotingPower });
  return (
    <div className={cx(classes.root, className)}>
      <div className={classes.content}>
        <Typography variant="body1">{content}</Typography>
        <Typography variant="body1" className="percentage">
          {percentDisplay}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </div>
  );
};

export default VotingPower;
