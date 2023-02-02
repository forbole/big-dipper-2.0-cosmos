import { FC, ReactNode } from 'react';
import useStyles from '@/components/box/styles';

type BoxProps = {
  className?: string;
  children: ReactNode;
};

const Box: FC<BoxProps> = ({ className, children }) => {
  const { classes, cx } = useStyles();
  return <div className={cx(classes.root, className)}>{children}</div>;
};

export default Box;
