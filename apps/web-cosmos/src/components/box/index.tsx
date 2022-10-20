import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

const Box: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({
  className, children,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root)}>
      {children}
    </div>
  );
};

export default Box;
