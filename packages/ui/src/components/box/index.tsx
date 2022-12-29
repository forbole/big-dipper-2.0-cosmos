import { useStyles } from '@/components/box/styles';
import classnames from 'classnames';
import React, { FC, ReactNode } from 'react';

type BoxProps = {
  className?: string;
  children: ReactNode;
};

const Box: FC<BoxProps> = ({ className, children }) => {
  const classes = useStyles();
  return <div className={classnames(className, classes.root)}>{children}</div>;
};

export default Box;
