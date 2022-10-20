import React from 'react';
import numeral from 'numeral';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { formatNumber } from '@utils/format_token';
import CopyIcon from '@assets/icon-copy.svg';
import { BoxDetails } from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { useScreenSize } from '@hooks';
import NonceAccountLogo from '@assets/nonce-account.svg';

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
        <NonceAccountLogo />
        <Typography variant="h2">
          {t('nonceAccount')}
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
        label: t('authority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.authority)}
            />
            <Link href={ACCOUNT_DETAILS(props.overview.authority)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.overview.authority, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.authority
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('balance'),
        detail: `${formatNumber(props.overview.balance.value, props.overview.balance.exponent)} ${props.overview.balance.displayDenom.toUpperCase()}`,
      },
      {
        label: t('blockhash'),
        detail: props.overview.blockhash,
      },
      {
        label: t('fee'),
        detail: numeral(props.overview.fee).format('0,0'),
      },
    ],
  };

  return (
    <BoxDetails
      className={classnames(props.className, classes.root)}
      {...data}
    />
  );
};

export default Overview;
