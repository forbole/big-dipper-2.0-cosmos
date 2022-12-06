import { useStyles } from '@/screens/validators/components/list/components/condition/styles';
import classnames from 'classnames';
import React from 'react';

const Condition: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return <div className={classnames(className, classes.root)} />;
};

export default Condition;
