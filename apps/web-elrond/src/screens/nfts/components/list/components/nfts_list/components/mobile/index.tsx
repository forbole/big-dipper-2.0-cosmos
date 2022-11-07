import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { getMiddleEllipsis } from 'ui/utils/get_middle_ellipsis';
import { Typography, Divider } from '@material-ui/core';
import Link from 'next/link';
import AvatarName from '@components/avatar_name';
import { NFT_DETAILS } from '@utils/go_to_page';
import { useStyles } from './styles';
import { NFTTypes } from '../../../../types';

const Mobile: React.FC<{ items: NFTTypes[] } & ComponentDefault> = (props) => {
  const { t } = useTranslation('nfts');
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
      creator: (
        <AvatarName
          name={getMiddleEllipsis(x.creator, {
            beginning: 13,
            ending: 15,
          })}
          address={x.creator}
        />
      ),
    };
  });

  return (
    <div className={props.className}>
      {formattedItems.map((x, i) => {
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
                  {t('type')}
                </Typography>
                <Typography variant="body1" className="value">
                  {x.type}
                </Typography>
              </div>
              <div className={classes.item}>
                <Typography variant="h4" className="label">
                  {t('creator')}
                </Typography>
                {x.creator}
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
