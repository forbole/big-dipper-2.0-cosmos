import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

function Condition(props: {
  className?: string;
}) {
  const className = props;
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)} />
  );
}

export default Condition;
