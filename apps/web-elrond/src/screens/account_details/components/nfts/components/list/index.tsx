import NoData from '@/components/no_data';
import Desktop from '@/screens/account_details/components/nfts/components/list/components/desktop';
import Mobile from '@/screens/account_details/components/nfts/components/list/components/mobile';
import type { OtherTokenType } from '@/screens/account_details/components/nfts/types';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const List: FC<{ items: OtherTokenType[] }> = (props) => {
  const { classes } = useSharedStyles();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop className={classes.hiddenUntilLg} items={props.items} />
      <Mobile className={classes.hiddenWhenLg} items={props.items} />
    </>
  );
};

export default List;
