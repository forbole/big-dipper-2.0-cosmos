import { FC, ReactNode } from 'react';
import useStyles from '@/components/custom_tool_tip/styles';

export interface CustomToolTipData {
  legendKey: string;
  percentKey?: string;
  value: string;
  rawValue: number;
  percent: string;
  fill: string;
}

type CustomToolTipProps = {
  className?: string;
  children: (data: CustomToolTipData) => ReactNode;
  active?: boolean;
  payload?: Array<{
    payload: CustomToolTipData;
  }>;
};

/**
 * Custom tooltips for recharts
 */
const CustomToolTip: FC<CustomToolTipProps> = (props) => {
  const { active, payload, className, children } = props;

  const { classes, cx } = useStyles();

  if (active && payload && payload.length) {
    const { payload: data } = payload?.[0] ?? {};
    return <div className={cx(classes.root, className)}>{children(data)}</div>;
  }

  return null;
};

export default CustomToolTip;
