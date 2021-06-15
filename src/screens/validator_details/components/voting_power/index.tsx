import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import numeral from 'numeral';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { VotingPowerType } from '../../types';

const VotingPower: React.FC<{
  className?: string;
  data: VotingPowerType;
}> = ({
  className,
  data,
}) => {
  const { t } = useTranslation('validators');
  const votingPowerPercent = numeral((
    data.self / data.overall.value) * 100);

  const classes = useStyles(votingPowerPercent.format(0, Math.floor));

  const votingPower = numeral(data.self).format('0,0');

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('votingPower')}
      </Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          {`${votingPowerPercent.format('0,0.00')}%`}
        </Typography>
        <Typography variant="body1">
          {votingPower}
          {' '}
          /
          {' '}
          {numeral(data.overall.value).format('0,0')}
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        <Link href={BLOCK_DETAILS(data.height)} passHref>
          <Typography variant="body1" className="value" component="a">
            {numeral(data.height).format('0,0')}
          </Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        <Typography variant="body1" className="value">
          {votingPower}
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('selfDelegatedTokens')}
        </Typography>
        <Typography variant="body1" className="value">
          {numeral(data.selfDelegate.value).format('0,0')}
          {' '}
          (
          {`${numeral(data.selfDelegatePercent).format('0.[00]')}%`}
          )
        </Typography>
      </div>
    </Box>
  );
};

export default VotingPower;
