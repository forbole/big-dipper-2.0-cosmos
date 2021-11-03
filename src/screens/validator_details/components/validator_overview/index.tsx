import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import numeral from 'numeral';
import dayjs, { formatDayJs } from '@utils/dayjs';
import {
  Divider, Typography,
} from '@material-ui/core';
import { useScreenSize } from '@hooks';
import CopyIcon from '@assets/icon-copy.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import {
  Box,
  Tag,
  InfoPopover,
  ConditionExplanation,
} from '@components';
import Link from 'next/link';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useRecoilValue } from 'recoil';
import { readDate } from '@recoil/settings';
import { getValidatorStatus } from '@utils/get_validator_status';
import { useStyles } from './styles';
import { getCondition } from './utils';
import { StatusType } from '../../types';
import { useAddress } from './hooks';

const ValidatorOverview: React.FC<StatusType &{
  className?: string;
  operatorAddress: string;
  selfDelegateAddress: string;
}> = ({
  className,
  operatorAddress,
  selfDelegateAddress,
  ...data
}) => {
  const { isDesktop } = useScreenSize();
  const classes = useStyles();
  const { t } = useTranslation('validators');
  const { handleCopyToClipboard } = useAddress(t);

  const dateFormat = useRecoilValue(readDate);
  const statusTheme = getValidatorStatus(data.status, data.jailed);
  const condition = getCondition(data.condition, data.status);

  const statusItems = [
    {
      key: (
        <Typography variant="h4" className="label">
          {t('status')}
        </Typography>
      ),
      value: (
        <Tag
          value={t(statusTheme.status)}
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
        <Typography
          variant="body1"
          className="value"
        >
          {`${numeral(data.commission * 100).format('0.00')}%`}
        </Typography>
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label condition">
          {t('condition')}
          <InfoPopover
            content={<ConditionExplanation />}
          />
        </Typography>
      ),
      value: (
        data.status === 3 ? (
          <div className="condition__body">
            <InfoPopover
              content={(
                <>
                  <Typography variant="body1">
                    {t('missedBlockCounter', {
                      amount: numeral(data.missedBlockCounter).format('0,0'),
                    })}
                  </Typography>
                  <Typography variant="body1">
                    {t('signedBlockWindow', {
                      amount: numeral(data.signedBlockWindow).format('0,0'),
                    })}
                  </Typography>
                </>
              )}
              display={(
                <Typography
                  variant="body1"
                  className={classnames('value', condition)}
                >
                  {t(condition)}
                </Typography>
          )}
            />
          </div>
        ) : (
          <Typography
            variant="body1"
            className={classnames('value', 'condition', condition)}
          >
            {t(condition)}
          </Typography>
        )
      ),
    },
    {
      key: (
        <Typography variant="h4" className="label">
          {t('lastSeen')}
        </Typography>
      ),
      value: (
        <Typography
          variant="body1"
          className="value"
        >
          {data.lastSeen ? formatDayJs(dayjs.utc(data.lastSeen), dateFormat) : t('na')}
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
                onClick={() => handleCopyToClipboard(operatorAddress)}
                className={classes.actionIcons}
              />
              <Typography variant="body1" className="value">
                {
                !isDesktop ? (
                  getMiddleEllipsis(operatorAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  operatorAddress
                )
              }
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
                onClick={() => handleCopyToClipboard(selfDelegateAddress)}
              />
              <Link href={ACCOUNT_DETAILS(selfDelegateAddress)} passHref>
                <Typography variant="body1" className="value" component="a">
                  {
                !isDesktop ? (
                  getMiddleEllipsis(selfDelegateAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  selfDelegateAddress
                )
              }
                </Typography>
              </Link>
            </div>
          </div>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.statusRoot}>
          {
          statusItems.map((x, i) => {
            return (
              <div className={classes.statusItem} key={`status-item-${i}`}>
                {x.key}
                {x.value}
              </div>
            );
          })
        }
        </div>
      </Box>
    </>
  );
};

export default ValidatorOverview;
