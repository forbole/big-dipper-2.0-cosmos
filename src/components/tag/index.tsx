import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const Tag:React.FC<{
  className?: string;
  value: string;
  theme?: 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'zero' // refer to styles for color reference
}> = ({
  className, value, theme,
}) => {
  const classes = useStyles();
  return (
    <div className={classnames(className, classes.root, classes[theme])}>
      <Typography variant="body1">
        {value}
      </Typography>
    </div>
  );
};

export default Tag;
