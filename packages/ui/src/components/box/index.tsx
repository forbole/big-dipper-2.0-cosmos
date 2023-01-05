import useStyles from '@/components/box/styles';
import React, { FC, ReactNode } from 'react';

type BoxProps = {
  className?: string;
  children: ReactNode;
};

const Box: FC<BoxProps> = ({ className, children }) => {
  const { classes, cx } = useStyles();
  return <div className={cx(className, classes.root)}>{children}</div>;
};

export default Box;
