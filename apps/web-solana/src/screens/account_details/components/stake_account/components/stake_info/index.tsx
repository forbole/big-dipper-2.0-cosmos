import React from 'react';
import numeral from 'numeral';
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
import { useStyles } from './styles';
import { useOverview } from './hooks';
import { StakeInfoType } from '../../types';

const MAX = 18446744073709552000;

const StakeInfo: React.FC<{stake: StakeInfoType} & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { isMobile } = useScreenSize();
  const {
    handleCopyToClipboard,
  } = useOverview(t);

  const data = {
    title: t('info'),
    details: [
      {
        label: t('status'),
        detail: t(props.stake.status),
      },
      {
        label: t('delegated'),
        detail: `${formatNumber(props.stake.delegated.value, props.stake.delegated.exponent)} ${props.stake.delegated.displayDenom.toUpperCase()}`,
      },
      {
        label: t('voter'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon
              className={classes.actionIcons}
              onClick={() => handleCopyToClipboard(props.stake.voter)}
            />
            <Link href={ACCOUNT_DETAILS(props.stake.voter)} passHref>
              <Typography variant="body1" className="value" component="a">
                {
                isMobile ? (
                  getMiddleEllipsis(props.stake.voter, {
                    beginning: 15, ending: 5,
                  })
                ) : (
                  props.stake.voter
                )
              }
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('activationEpoch'),
        detail: numeral(props.stake.activationEpoch).format('0,0'),
      },
      {
        label: t('deactivationEpoch'),
        detail: props.stake.deactivationEpoch !== MAX ? numeral(props.stake.deactivationEpoch).format('0,0') : '-',
      },
    ],
  };

  return (
    <BoxDetails className={classnames(props.className, classes.root)} {...data} />
  );
};

export default StakeInfo;
