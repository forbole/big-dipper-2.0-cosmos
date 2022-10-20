import React from 'react';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import Link from 'next/link';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import CopyIcon from '@assets/icon-copy.svg';
import {
  BoxDetails,
  AvatarName,
} from '@components';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { formatNumber } from '@utils/format_token';
import { useScreenSize } from '@hooks';
import TokenAccountLogo from '@assets/token-account.svg';
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
        <TokenAccountLogo />
        <Typography variant="h2">
          {t('tokenAccount')}
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
        label: t('owner'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.overview.owner)}
            />
            <Link href={ACCOUNT_DETAILS(props.overview.owner)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.overview.owner, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.overview.owner
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('mint'),
        detail: (
          <AvatarName
            address={props.overview.mint}
            name={props.overview.balance.displayDenom}
            imageUrl={props.overview.mintImageUrl}
          />
        ),
      },
      {
        label: t('balance'),
        detail: formatNumber(props.overview.balance.value, props.overview.balance.exponent),
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default Overview;
