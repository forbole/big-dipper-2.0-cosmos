import { FC } from 'react';
import useStyles from '@/screens/validators/components/list/components/condition/styles';

const Condition: FC<ComponentDefault> = ({ className }) => {
  const { classes, cx } = useStyles();

  return <div className={cx(classes.root, className)} />;
};

export default Condition;
