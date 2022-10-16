import React from 'react';
import classnames from 'classnames';
import { useStyles } from './styles';

/**
 * Custom tooltips for recharts
 */
const CustomToolTip: React.FC<{
  className?: string;
  children: (data) => React.ReactNode;
  active?: boolean;
  payload?: any;
}> = (props) => {
  const {
    active,
    payload,
    className,
    children,
  } = props;

  const classes = useStyles();

  if (payload && active) {
    const { payload: data } = payload?.[0];
    return (
      <div className={classnames(classes.root, className)}>
        {children(data)}
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
