import React from 'react';
import Big from 'big.js';
import numeral from 'numeral';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { SkipRateType } from '../../types';

const SkipRate: React.FC<{skipRate: SkipRateType} & ComponentDefault> = (props) => {
  const percent = Big(props.skipRate.rate).times(100).toFixed(2);
  const classes = useStyles(percent);

  return (
    <div className={classnames(props.className, classes.root)}>
      <div className={classes.content}>
        <Typography variant="body1">
          {`${numeral(props.skipRate.skip).format('0,0')} / ${numeral(props.skipRate.total).format('0,0')}`}
        </Typography>
        <Typography variant="body1" className="percentage">
          {percent}
          %
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </div>
  );
};

export default SkipRate;
