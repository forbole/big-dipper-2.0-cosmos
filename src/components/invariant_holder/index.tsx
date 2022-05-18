import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const InvariantHolder: React.FC<{
  className?: string;
  name: string;
}> = ({
  className, name,
}) => {
  const classes = useStyles();

  return (
    <Typography variant="body1" className={classnames(className, classes.root)} component="a">
      {name}
    </Typography>
  );
};

export default InvariantHolder;
