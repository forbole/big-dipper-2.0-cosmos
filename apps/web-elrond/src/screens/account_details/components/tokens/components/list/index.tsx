import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { OtherTokenType } from '@/screens/account_details/components/tokens/types';
import type DesktopType from '@/screens/account_details/components/tokens/components/list/components/desktop';
import type MobileType from '@/screens/account_details/components/tokens/components/list/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/account_details/components/tokens/components/list/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/account_details/components/tokens/components/list/components/mobile')
) as typeof MobileType;

const List: React.FC<{ items: OtherTokenType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return <>{isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />}</>;
};

export default List;
