import React from 'react';
import numeral from 'numeral';
import Big from 'big.js';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import { Box } from '@components';
import { useStyles } from './styles';
import { SkipRateType } from '../../types';

const SkipRate: React.FC<{skipRate: SkipRateType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const percent = Big(props.skipRate.skipRate).times(100).toFixed(2);
  const classes = useStyles(percent);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('skipRate')}
      </Typography>
      <div className={classes.actionsWrapper}>
        <div className={classes.data}>
          <Typography variant="h3" className="primary__data">
            {percent}
            %
          </Typography>
          <Typography variant="body1">
            {`${numeral(props.skipRate.skip).format('0,0')} / ${numeral(props.skipRate.total).format('0,0')}`}
          </Typography>
        </div>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
    </Box>
  );
};

export default SkipRate;
