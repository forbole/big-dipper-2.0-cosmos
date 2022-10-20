import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import { formatNumber } from '@utils/format_token';
import { BoxDetails } from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import StakeAccountLogo from '@assets/stake-account.svg';
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { OverviewType } from '../../types';

const Overview: React.FC<{overview: OverviewType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isMobile } = useScreenSize();
  const {
    handleCopyToClipboard,
  } = useOverview(t);

  const data = {
    title: (
      <div className={classes.header}>
        <StakeAccountLogo />
        <Typography variant="h2">
          {t('stakeAccount')}
        </Typography>
      </div>
    ),
    details: [
      {
        label: t('address'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.address)}
            />
            <Typography variant="body1" className="value">
              {
                isMobile ? (
                  getMiddleEllipsis(props.overview.address, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.address
                )
              }
            </Typography>
          </>
        ),
      },
      {
        label: t('balance'),
        detail: `${formatNumber(props.overview.balance.value, props.overview.balance.exponent)} ${props.overview.balance.displayDenom.toUpperCase()}`,
      },
      {
        label: t('withdrawer'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.withdrawer)}
            />
            <Link href={ACCOUNT_DETAILS(props.overview.withdrawer)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.overview.withdrawer, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.withdrawer
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('staker'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.staker)}
            />
            <Link href={ACCOUNT_DETAILS(props.overview.staker)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.overview.staker, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.withdrawer
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default Overview;
