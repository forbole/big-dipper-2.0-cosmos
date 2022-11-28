import Box from '@/components/box';
import Tag from '@/components/tag';
import { useScreenSize } from '@/hooks';
import { useAddress } from '@/screens/validator_details/components/validator_overview/hooks';
import { useStyles } from '@/screens/validator_details/components/validator_overview/styles';
import type { OverviewType, StatusType } from '@/screens/validator_details/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getValidatorStatus } from '@/utils/get_validator_status';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Big from 'big.js';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import React from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

const ValidatorOverview: React.FC<
  {
    status: StatusType;
    overview: OverviewType;
  } & ComponentDefault
> = ({ status, overview, className }) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { handleCopyToClipboard } = useAddress(t);

  const statusTheme = getValidatorStatus(status.inActiveSet, status.jailed, status.tombstoned);

  const statusItems = [
    {
      key: (
        <Typography variant="h4" className="label">
          {t('status')}
        </Typography>
      ),
      value: (
        <Tag value={statusTheme.status} theme={statusTheme.theme} className={classes.statusTag} />
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label">
          {t('commission')}
        </Typography>
      ),
      value: (
        <Typography variant="body1" className="value">
          {`${numeral(status.commission * 100).format('0.00')}%`}
        </Typography>
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label">
          {t('maxRate')}
        </Typography>
      ),
      value: (
        <Typography variant="body1" className="value">
          {Big(status.maxRate).times(100).toFixed(2)}%
        </Typography>
      ),
    },
  ];

  return (
    <Box className={classnames(className)}>
      <div className={classes.addressRoot}>
        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('operatorAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(overview.operatorAddress)}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              {!isDesktop
                ? getMiddleEllipsis(overview.operatorAddress, {
                    beginning: 15,
                    ending: 5,
                  })
                : overview.operatorAddress}
            </Typography>
          </div>
        </div>

        <div className={classnames(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('selfDelegateAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(overview.selfDelegateAddress)}
            />
            <Link href={ACCOUNT_DETAILS(overview.selfDelegateAddress)} passHref>
              <Typography variant="body1" className="value" component="a">
                {!isDesktop
                  ? getMiddleEllipsis(overview.selfDelegateAddress, {
                      beginning: 15,
                      ending: 5,
                    })
                  : overview.selfDelegateAddress}
              </Typography>
            </Link>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.statusRoot}>
        {statusItems.map((x, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.statusItem} key={`status-item-${i}`}>
            {x.key}
            {x.value}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ValidatorOverview;
