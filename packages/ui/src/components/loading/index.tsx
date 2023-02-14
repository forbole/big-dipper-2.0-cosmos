import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import useStyles from '@/components/loading/styles';

const Loading: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();
  return (
    <div className={cx(classes.root, className)}>
      <CircularProgress disableShrink />
    </div>
  );
};

export default Loading;
