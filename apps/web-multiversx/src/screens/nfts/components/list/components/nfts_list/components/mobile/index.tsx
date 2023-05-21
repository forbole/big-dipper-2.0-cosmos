import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import AvatarName from '@/components/avatar_name';
import useStyles from '@/screens/nfts/components/list/components/nfts_list/components/mobile/styles';
import type { NFTTypes } from '@/screens/nfts/components/list/types';
import { getMiddleEllipsis } from '@/utils/get_middle_ellipsis';
import { NFT_DETAILS } from '@/utils/go_to_page';

const Mobile: FC<{ className?: string; items: NFTTypes[] }> = (props) => {
  const { t } = useAppTranslation('nfts');
  const { classes } = useStyles();
  const formattedItems = props.items.map((x, i) => ({
    key: `${x.identifier}-${i}`,
    identifier: x.identifier,
    nft: (
      <Link shallow prefetch={false} href={NFT_DETAILS(x.identifier)} className="value">
        {x.name}
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
        </Fragment>
      ))}
    </div>
  );
};

export default Mobile;
