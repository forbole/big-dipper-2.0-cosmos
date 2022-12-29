import { useStyles } from '@/screens/validators/components/list/components/condition/styles';
import classnames from 'classnames';
import React, { FC } from 'react';

const Condition: FC<ComponentDefault> = ({ className }) => {
  const classes = useStyles();

  return <div className={classnames(className, classes.root)} />;
};

export default Condition;
