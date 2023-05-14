import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import useAppTranslation from '@/hooks/useAppTranslation';
import { FC, Fragment } from 'react';
import AvatarName from '@/components/avatar_name';
import { useProfileRecoil } from '@/recoil/profiles/hooks';
import useStyles from '@/screens/proposal_details/components/votes/components/mobile/styles';
import type { ItemType } from '@/screens/proposal_details/components/votes/types';
import { getVoteKey } from '@/screens/proposal_details/components/votes/utils';

type VoteItemProps = {
  i: number;
  item: ItemType;
  isLast: boolean;
};

const VoteItem: FC<VoteItemProps> = ({ i, item, isLast }) => {
  const { t } = useAppTranslation('proposals');
  const { classes } = useStyles();
  const { name, address, imageUrl } = useProfileRecoil(item.user);

  return (
    <Fragment key={`votes-mobile-${i}`}>
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
      {!isLast && <Divider />}
    </Fragment>
  );
};

type MobileProps = {
  className?: string;
  items?: ItemType[];
};

const Mobile: FC<MobileProps> = ({ className, items }) => (
  <div className={className}>
    {items?.map((x, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <VoteItem key={i} i={i} item={x} isLast={i === items.length - 1} />
    ))}
  </div>
);

export default Mobile;
