import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import Desktop from '@/screens/account_details/components/tokens/components/list/components/desktop';
import Mobile from '@/screens/account_details/components/tokens/components/list/components/mobile';
import type { OtherTokenType } from '@/screens/account_details/components/tokens/types';
import { FC } from 'react';

const List: FC<{ items: OtherTokenType[] }> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  if (isDesktop) {
    return <Desktop items={props.items} />;
  }

  return <Mobile items={props.items} />;
};

export default List;
