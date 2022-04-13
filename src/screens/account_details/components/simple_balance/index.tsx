import React from 'react';
import classnames from 'classnames';
import Big from 'big.js';
import numeral from 'numeral';
import * as R from 'ramda';
import { useRecoilValue } from 'recoil';
import { readMarket } from '@recoil/market';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { chainConfig } from '@configs';
import { formatNumber } from '@utils/format_token';
import { useStyles } from './styles';

const Balance: React.FC<{
  className?: string;
  total: TokenUnit;
}> = (props) => {
  const { t } = useTranslation('accounts');
  const {
    classes,
  } = useStyles();
  const market = useRecoilValue(readMarket);

  const totalAmount = `$${numeral(Big(market.price || 0).times(props.total.value).toPrecision()).format('0,0.00')}`;

  // format
  const totalDisplay = formatNumber(props.total.value, props.total.exponent);

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('balance')}
      </Typography>
      <div>
        <Divider className={classes.divider} />
        <div className={classes.total}>
          <div className="total__single--container">
            <Typography variant="h3" className="label">
              {t('total', {
                unit: props.total.displayDenom.toUpperCase(),
              })}
            </Typography>
            <Typography variant="h3">
              {totalDisplay}
            </Typography>
          </div>
          <div className="total__secondary--container total__single--container">
            <Typography variant="body1" className="label">
              $
              {numeral(market.price).format('0,0.[00]', Math.floor)}
              {' '}
              /
              {' '}
              {R.pathOr('', ['tokenUnits', chainConfig.primaryTokenUnit, 'display'], chainConfig).toUpperCase()}
            </Typography>
            <Typography variant="body1">
              {totalAmount}
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Balance;
