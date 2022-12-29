import { useStyles } from '@/screens/validators/components/list/components/voting_power/styles';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import React, { FC } from 'react';

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
  const classes = useStyles(percentage, topVotingPower);
  return (
    <div className={classnames(className, classes.root)}>
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
