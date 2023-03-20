import Typography from '@mui/material/Typography';
import { FC } from 'react';
import useStyles from '@/screens/home/components/data_blocks/components/single_block/styles';
import Spinner from '@/components/loadingSpinner';

type SingleBlockProps = {
  className?: string;
  label: string;
  value: string | null;
  description?: string;
};

const SingleBlock: FC<SingleBlockProps> = ({ className, label, value, description }) => {
  const { classes, cx } = useStyles();
  //Number of validators without text
  let validatorNum = description?.replace(/[^0-9]/g, '');

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <div className="content">
        {value ? <Typography variant="h1">{value}</Typography> : <Spinner />}
        {!!description && (
          <Typography variant="caption" className="description">
            {` / ${validatorNum}`}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default SingleBlock;
