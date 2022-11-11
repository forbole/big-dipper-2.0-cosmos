import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { Typography, Divider } from '@material-ui/core';
import Link from 'next/link';
import { NFT_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { OtherTokenType } from '../../../../types';

const Mobile: React.FC<{ items: OtherTokenType[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const classes = useStyles();
  const formattedItems = props.items.map((x) => {
    return {
      identifier: x.identifier,
      nft: (
        <Link href={NFT_DETAILS(x.identifier)} passHref>
          <Typography variant="body1" className="value" component="a">
            {x.name}
          </Typography>
        </Link>
      ),
      type: x.type,
    };
  });

  return (
    <div className={props.className}>
      {formattedItems?.map((x, i) => {
        return (
          <React.Fragment key={`${x.identifier}-${i}`}>
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
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Mobile;
