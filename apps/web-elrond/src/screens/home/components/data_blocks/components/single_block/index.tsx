import React from 'react';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '@/screens/home/components/data_blocks/components/single_block/styles';

const SingleBlock: React.FC<{
  className?: string;
  label: string;
  value: string;
  description?: string;
}> = ({ className, label, value, description }) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <div className="content">
        <Typography variant="h1">{value}</Typography>
        {!!description && (
          <Typography variant="caption" className="description">
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default SingleBlock;
