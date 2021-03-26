import React from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import {
  Typography,
} from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';
import { Box } from '@components';
import { BLOCK_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';

const VotingPower: React.FC<{
  className?: string;
}> = ({
  className,
}) => {
  const { t } = useTranslation('validators');
  const classes = useStyles(50);
  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('votingPower')}
      </Typography>
      <div className={classes.data}>
        <Typography variant="h3" className="primary__data">
          4.9%
        </Typography>
        <Typography variant="body1">
          5904 / 203
        </Typography>
      </div>
      <div className={classes.chart}>
        <div className={classes.active} />
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('block')}
        </Typography>
        <Link href={BLOCK_DETAILS('123')} passHref>
          <Typography variant="body1" className="value" component="a">
            100,001
          </Typography>
        </Link>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('votingPower')}
        </Typography>
        <Typography variant="body1" className="value">
          100,001
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('selfDelegatedTokens')}
        </Typography>
        <Typography variant="body1" className="value">
          100,001
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography variant="h4" className="label">
          {t('lastVotingPowerChange')}
        </Typography>
        <Typography variant="body1" className="value">
          <Trans
            i18nKey="validators:powerChange"
            components={[
              <span className="positive" />,
            ]}
            values={{
              change: '+10',
              block: '300,000',
            }}
          />
          <Link href={BLOCK_DETAILS('123')} passHref>
            <Typography variant="body1" className="value" component="a">
              100,001
            </Typography>
          </Link>
        </Typography>
      </div>
    </Box>
  );
};

export default VotingPower;
