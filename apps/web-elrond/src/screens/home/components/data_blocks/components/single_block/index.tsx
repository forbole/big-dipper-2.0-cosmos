import { useStyles } from '@/screens/home/components/data_blocks/components/single_block/styles';
import Typography from '@mui/material/Typography';
import classnames from 'classnames';
import { FC } from 'react';

type SingleBlockProps = {
  className?: string;
  label: string;
  value: string;
  description?: string;
};

const SingleBlock: FC<SingleBlockProps> = ({ className, label, value, description }) => {
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
