import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { Typography } from '@material-ui/core';
import CopyIcon from '@assets/icon-copy.svg';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { BoxDetails } from '@components';
import { OverviewType } from '../../types';
import { useOverview } from './hooks';
import { useStyles } from './styles';

const Overview: React.FC<{overview: OverviewType} & ComponentDefault> = (props, { className }) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const { handleCopyToClipboard } = useOverview();

  return (
    <BoxDetails
      className={className}
      title={t('overview')}
      details={[
        {
          label: t('address'),
          className: classes.copyText,
          detail: (
            <>
              <CopyIcon onClick={() => handleCopyToClipboard(props.overview.mint)} />
              <Typography variant="body1" className="value">
                {getMiddleEllipsis(props.overview.mint, {
                  beginning: 15, ending: 5,
                })}
              </Typography>
            </>
          ),
        },
        {
          label: t('decimals'),
          detail: props.overview.decimals,
        },
        {
          label: t('mintAuthority'),
          className: classes.copyText,
          detail: (
            <>
              {!!props.overview.mintAuthority && (
              <CopyIcon onClick={() => handleCopyToClipboard(props.overview.mintAuthority)} />
              )}
              {props.overview.mintAuthority ? (
                <Link href={ACCOUNT_DETAILS(props.overview.mintAuthority)} passHref>
                  <Typography variant="body1" className="value" component="a">
                    {getMiddleEllipsis(props.overview.mintAuthority, {
                      beginning: 15, ending: 5,
                    })}
                  </Typography>
                </Link>
              ) : (
                <Typography>
                  -
                </Typography>
              )}
            </>
          ),
        },
        {
          label: t('freezeAuthority'),
          className: classes.copyText,
          detail: (
            <>
              {!!props.overview.freezeAuthority && (
              <CopyIcon onClick={() => handleCopyToClipboard(props.overview.freezeAuthority)} />
              )}
              {props.overview.freezeAuthority ? (
                <Link href={ACCOUNT_DETAILS(props.overview.freezeAuthority)} passHref>
                  <Typography variant="body1" className="value" component="a">
                    {getMiddleEllipsis(props.overview.freezeAuthority, {
                      beginning: 15, ending: 5,
                    })}
                  </Typography>
                </Link>
              ) : (
                <Typography variant="body1" className="value">
                  -
                </Typography>
              )}
            </>
          ),
        },
      ]}
    />
  );
};

export default Overview;
