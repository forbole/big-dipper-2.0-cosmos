import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Big from 'big.js';
import numeral from 'numeral';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { useScreenSize } from 'ui/hooks';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import Box from 'ui/components/box';
import Tag from 'ui/components/tag';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from 'ui/utils/go_to_page';
import { getValidatorStatus } from '@utils/get_validator_status';
import { useStyles } from './styles';
import type { StatusType, OverviewType } from '../../types';
import { useAddress } from './hooks';

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
        <Tag
          value={statusTheme.status}
          theme={statusTheme.theme as any}
          className={classes.statusTag}
        />
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
    <>
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
    </>
  );
};

export default ValidatorOverview;
