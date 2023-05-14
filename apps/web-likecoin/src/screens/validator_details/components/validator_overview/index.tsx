import Box from '@/components/box';
import ConditionExplanation from '@/components/condition_explanation';
import InfoPopover from '@/components/info_popover';
import Tag from '@/components/tag';
import { useAddress } from '@/screens/validator_details/components/validator_overview/hooks';
import useStyles from '@/screens/validator_details/components/validator_overview/styles';
import { getCondition } from '@/screens/validator_details/components/validator_overview/utils';
import type { OverviewType, StatusType } from '@/screens/validator_details/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { getValidatorStatus } from '@/utils/get_validator_status';
import { ACCOUNT_DETAILS } from '@/utils/go_to_page';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Big from 'big.js';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import numeral from 'numeral';
import { FC } from 'react';
import CopyIcon from 'shared-utils/assets/icon-copy.svg';

type ValidatorOverviewProps = {
  className?: string;
  status: StatusType;
  overview: OverviewType;
};

const ValidatorOverview: FC<ValidatorOverviewProps> = ({ status, overview, className }) => {
  const { classes, cx } = useStyles();
  const display = useDisplayStyles().classes;
  const { t } = useAppTranslation('validators');
  const { handleCopyToClipboard } = useAddress(t);

  const statusTheme = getValidatorStatus(status.status, status.jailed, status.tombstoned);
  const condition = getCondition(status.condition, status.status);

  const statusItems = [
    {
      key: 'status',
      name: (
        <Typography variant="h4" className="label">
          {t('status')}
        </Typography>
      ),
      value: (
        <Tag
          value={t(statusTheme.status)}
          theme={statusTheme.theme}
          className={classes.statusTag}
        />
      ),
    },
    {
      key: 'commission',
      name: (
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
      key: 'condition',
      name: (
        <Typography variant="h4" className="label condition">
          {t('condition')}
          <InfoPopover content={<ConditionExplanation />} />
        </Typography>
      ),
      value:
        status.status === 3 ? (
          <div className="condition__body">
            <InfoPopover
              content={
                <>
                  <Typography variant="body1">
                    {t('missedBlockCounter', {
                      amount: numeral(status.missedBlockCounter).format('0,0'),
                    })}
                  </Typography>
                  <Typography variant="body1">
                    {t('signedBlockWindow', {
                      amount: numeral(status.signedBlockWindow).format('0,0'),
                    })}
                  </Typography>
                </>
              }
              display={
                <Typography variant="body1" className={cx('value', condition)}>
                  {t(condition)}
                </Typography>
              }
            />
          </div>
        ) : (
          <Typography variant="body1" className={cx('value', 'condition', condition)}>
            {t(condition)}
          </Typography>
        ),
    },
    {
      key: 'maxRate',
      name: (
        <Typography variant="h4" className="label">
          {t('maxRate')}
        </Typography>
      ),
      value: (
        <Typography variant="body1" className="value">
          {Big(status.maxRate)?.times(100).toFixed(2)}%
        </Typography>
      ),
    },
  ];

  return (
    <Box className={className}>
      <div className={classes.addressRoot}>
        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('operatorAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              onClick={() => handleCopyToClipboard(overview.operatorAddress)}
              className={classes.actionIcons}
            />
            <Typography variant="body1" className="value">
              <span className={display.hiddenUntilLg}>{overview.operatorAddress}</span>
              <span className={display.hiddenWhenLg}>
                {getMiddleEllipsis(overview.operatorAddress, {
                  beginning: 15,
                  ending: 5,
                })}
              </span>
            </Typography>
          </div>
        </div>

        <div className={cx(classes.copyText, classes.item)}>
          <Typography variant="body1" className="label">
            {t('selfDelegateAddress')}
          </Typography>
          <div className="detail">
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(overview.selfDelegateAddress)}
            />
            <Link shallow href={ACCOUNT_DETAILS(overview.selfDelegateAddress)} className="value">
              <span className={display.hiddenUntilLg}>{overview.selfDelegateAddress}</span>
              <span className={display.hiddenWhenLg}>
                {getMiddleEllipsis(overview.selfDelegateAddress, {
                  beginning: 15,
                  ending: 5,
                })}
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.statusRoot}>
        {statusItems.map((x) => (
          <div key={x.key} className={classes.statusItem}>
            {x.name}
            {x.value}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default ValidatorOverview;
