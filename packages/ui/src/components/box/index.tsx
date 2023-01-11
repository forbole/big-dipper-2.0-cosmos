import useStyles from '@/components/box/styles';
import React, { FC, ReactNode } from 'react';

type BoxProps = {
  className?: string;
  children: ReactNode;
};

const Box: FC<BoxProps> = ({ className, children }) => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.root, className)}>{children}</div>;
};

export default Box;
