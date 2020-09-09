import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';
import useTranslation from 'next-translate/useTranslation';
import { Typography } from '@material-ui/core';
import CopyIcon from '@assets/icon-copy.svg';
import { getMiddleEllipsis } from '@utils/get_middle_ellipsis';
import { ACCOUNT_DETAILS } from '@utils/go_to_page';
import { BoxDetails } from '@components';
import { useStyles } from './styles';

const Overview: React.FC<{
  className?: string;
}> = ({ className }) => {
  const classes = useStyles();
  const { t } = useTranslation('tokens');

  const handleCopyToClipboard = (value: string) => {
    copy(value);
    toast(t('common:copied'));
  };

  const dummyProps = {
    title: t('overview'),
    details: [
      {
        label: t('address'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
            <Typography variant="body1" className="value">
              {getMiddleEllipsis('HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X', {
                beginning: 15, ending: 5,
              })}
            </Typography>
          </>
        ),
      },
      {
        label: t('decimals'),
        detail: '7',
      },
      {
        label: t('mintAuthority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
            <Link href={ACCOUNT_DETAILS('123')} passHref>
              <Typography variant="body1" className="value" component="a">
                {getMiddleEllipsis('HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X', {
                  beginning: 15, ending: 5,
                })}
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('freezeAuthority'),
        className: classes.copyText,
        detail: (
          <>
            <CopyIcon onClick={() => handleCopyToClipboard('1334')} />
            <Link href={ACCOUNT_DETAILS('123')} passHref>
              <Typography variant="body1" className="value" component="a">
                {getMiddleEllipsis('HjTgC7ukwMA1gsEC5YGTaDFM5zt0skfsdkhfsdkhfshjsfdGE6B6X', {
                  beginning: 15, ending: 5,
                })}
              </Typography>
            </Link>
          </>
        ),
      },
      {
        label: t('officialSite'),
        detail: (
          <Typography
            variant="body1"
            className="value"
            component="a"
            href="tokenname.com"
            target="_blank"
            rel="noopener"
          >
            tokenname.com
          </Typography>
        ),
      },
    ],
  };
  return (
    <BoxDetails className={className} {...dummyProps} />
  );
};

export default Overview;
