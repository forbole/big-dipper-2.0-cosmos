import LinearProgress from '@mui/material/LinearProgress';
import { FC } from 'react';
import useStyles from '@/components/linear_loading/styles';

const LinearLoading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <LinearProgress />
    </div>
  );
};

export default LinearLoading;
