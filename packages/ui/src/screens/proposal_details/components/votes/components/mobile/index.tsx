import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import { useStyles } from '@/screens/proposal_details/components/votes/components/mobile/styles';
import type { ItemType } from '@/screens/proposal_details/components/votes/types';
import { getVoteKey } from '@/screens/proposal_details/components/votes/utils';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

type Props = {
  className?: string;
  items?: ItemType[];
};

const VoteItem: FC<{
  i: number;
  item: ItemType;
  items: ItemType[];
}> = ({ i, item, items }) => {
  const { t } = useTranslation('proposals');
  const classes = useStyles();
  const { name, address, imageUrl } = useProfileRecoil(item.user);

  return (
    <React.Fragment key={`votes-mobile-${i}`}>
      <div className={classes.list}>
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('voter')}
          </Typography>
          <AvatarName address={address} imageUrl={imageUrl} name={name} />
        </div>
        {/* <div className={classes.item}>
            <Typography variant="h4" className="label">
              {t('votingPower')}
            </Typography>
            <Typography variant="body1" className="value">
              {x.votingPower}
            </Typography>
          </div> */}
        <div className={classes.item}>
          <Typography variant="h4" className="label">
            {t('vote')}
          </Typography>
          <Typography variant="body1" className="value">
            {t(getVoteKey(item.vote))}
          </Typography>
        </div>
      </div>
      {i !== items.length - 1 && <Divider />}
    </React.Fragment>
  );
};

const Mobile: FC<Props> = ({ className, items }) => (
  <div className={classnames(className)}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <VoteItem key={i} i={i} item={x} items={items} />
    ))}
  </div>
);

export default Mobile;
