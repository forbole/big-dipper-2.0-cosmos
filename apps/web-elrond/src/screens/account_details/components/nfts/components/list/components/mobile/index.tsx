import { useStyles } from '@/screens/account_details/components/nfts/components/list/components/mobile/styles';
import type { OtherTokenType } from '@/screens/account_details/components/nfts/types';
import { NFT_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React, { FC, Fragment } from 'react';

const Mobile: FC<{ className?: string; items: OtherTokenType[] }> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    nft: (
      <Link href={NFT_DETAILS(x.identifier)} passHref>
        <Typography variant="body1" className="value" component="a">
          {x.name}
        </Typography>
      </Link>
    ),
    type: x.type,
  }));

  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => (
        <Fragment key={x.key}>
          <div className={classes.root}>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('nft')}
              </Typography>
              {x.nft}
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('identifier')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.identifier}
              </Typography>
            </div>
            <div className={classes.item}>
              <Typography variant="h4" className="label">
                {t('type')}
              </Typography>
              <Typography variant="body1" className="value">
                {x.type}
              </Typography>
            </div>
          </div>
          {i !== formattedItems.length - 1 && <Divider />}
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
