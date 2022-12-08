import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { OtherTokenType } from '@/screens/account_details/components/nfts/types';

const Desktop = dynamic(
  () => import('@/screens/account_details/components/nfts/components/list/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/account_details/components/nfts/components/list/components/mobile')
);

const List: React.FC<{ items: OtherTokenType[] } & ComponentDefault> = (props) => {
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
