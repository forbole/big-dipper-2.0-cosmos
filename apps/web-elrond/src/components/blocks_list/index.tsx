import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from '@/hooks';
import type { BlockListType } from '@/components/blocks_list/types';
import type DesktopType from '@/components/blocks_list/components/desktop';
import type MobileType from '@/components/blocks_list/components/mobile';

const Desktop = dynamic(
  () => import('@/components/blocks_list/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/components/blocks_list/components/mobile')
) as typeof MobileType;

const BlocksList: React.FC<BlockListType & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (isDesktop) {
    return <Desktop items={props.items} />;
  }

  return <Mobile items={props.items} />;
};

export default BlocksList;
