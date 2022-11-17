import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Big from 'big.js';
import numeral from 'numeral';
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
import { getValidatorStatus } from '@utils/get_validator_status';
import { useStyles } from './styles';
import { getCondition } from './utils';
import {
  StatusType, OverviewType,
} from '../../types';
import { useAddress } from './hooks';

const ValidatorOverview: React.FC<{
  status: StatusType, overview: OverviewType } & ComponentDefault> = ({
    status,
    overview,
    className,
  }) => {
    const { isDesktop } = useScreenSize();
    const classes = useStyles();
    const { t } = useTranslation('validators');
    const { handleCopyToClipboard } = useAddress(t);

    const statusTheme = getValidatorStatus(status.status, status.jailed, status.tombstoned);
    const condition = getCondition(status.condition, status.status);

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
            {`${numeral(status.commission * 100).format('0.00')}%`}
          </Typography>
        ),
      },
      {
        key: (
          <Typography variant="h4" className="label condition">
            {t('condition')}
            <InfoPopover
              content={ConditionExplanation}
            />
          </Typography>
        ),
        value: (
          status.status === 3 ? (
            <div className="condition__body">
              <InfoPopover
                content={(
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
            {t('maxRate')}
          </Typography>
        ),
        value: (
          <Typography
            variant="body1"
            className="value"
          >
            {Big(status.maxRate).times(100).toFixed(2)}
            %
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
                  {
                !isDesktop ? (
                  getMiddleEllipsis(overview.operatorAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  overview.operatorAddress
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
                  onClick={() => handleCopyToClipboard(overview.selfDelegateAddress)}
                />
                <Link href={ACCOUNT_DETAILS(overview.selfDelegateAddress)} passHref>
                  <Typography variant="body1" className="value" component="a">
                    {
                !isDesktop ? (
                  getMiddleEllipsis(overview.selfDelegateAddress, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  overview.selfDelegateAddress
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
