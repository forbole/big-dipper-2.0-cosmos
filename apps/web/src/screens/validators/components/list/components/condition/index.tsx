import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

const Condition: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)} />
  );
};

export default Condition;
