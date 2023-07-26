import Typography from '@mui/material/Typography';
import { FC } from 'react';
import useStyles from '@/screens/home/components/data_blocks/components/single_block/styles';

type SingleBlockProps = {
  className?: string;
  label: string;
  value: string;
  description?: string;
  Icon?: JSX.Element;
};

const SingleBlock: FC<SingleBlockProps> = ({ className, label, value, description, Icon }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.root, className)}>
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <div className="content">
        <Typography variant="h1">{value}</Typography>
        <div className="flexContent">
          {!!description && (
            <Typography variant="caption" className="description">
              {description}
            </Typography>
          )}
          {!!Icon && Icon}
        </div>
      </div>
    </div>
  );
};

export default SingleBlock;
