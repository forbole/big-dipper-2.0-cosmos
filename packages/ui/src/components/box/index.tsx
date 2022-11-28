import { useStyles } from '@/components/box/styles';
import classnames from 'classnames';
import React from 'react';

const Box: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  const classes = useStyles();
  return <div className={classnames(className, classes.root)}>{children}</div>;
};

export default Box;
