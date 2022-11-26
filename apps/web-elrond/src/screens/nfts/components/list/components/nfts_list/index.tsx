import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { NFTTypes } from '@/screens/nfts/components/list/types';
import type DesktopType from '@/screens/nfts/components/list/components/nfts_list/components/desktop';
import type MobileType from '@/screens/nfts/components/list/components/nfts_list/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/nfts/components/list/components/nfts_list/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/nfts/components/list/components/nfts_list/components/mobile')
) as typeof MobileType;

const NftsList: React.FC<{ items: NFTTypes[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  if (isDesktop) {
    return <Desktop items={props.items} />;
  }

  return <Mobile items={props.items} />;
};

export default NftsList;
