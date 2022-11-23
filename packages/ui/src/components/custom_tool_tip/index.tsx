import React from 'react';
import classnames from 'classnames';
import { useStyles } from '@/components/custom_tool_tip/styles';

export interface CustomToolTipData {
  legendKey: string;
  percentKey?: string;
  value: string;
  rawValue: number;
  percent: string;
  fill: string;
}

/**
 * Custom tooltips for recharts
 */
const CustomToolTip: React.FC<{
  className?: string;
  children: (data: CustomToolTipData) => React.ReactNode;
  active?: boolean;
  payload?: any;
}> = (props) => {
  const { active, payload, className, children } = props;

  const classes = useStyles();

  if (active && payload && payload.length) {
    const { payload: data } = payload?.[0];
    return <div className={classnames(classes.root, className)}>{children(data)}</div>;
  }

  return null;
};

export default CustomToolTip;
