import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { TokenType } from '@/screens/tokens/components/list/types';
import type DesktopType from '@/screens/tokens/components/list/components/tokens_list/components/desktop';
import type MobileType from '@/screens/tokens/components/list/components/tokens_list/components/mobile';

const Desktop = dynamic(
  () => import('@/screens/tokens/components/list/components/tokens_list/components/desktop')
) as typeof DesktopType;
const Mobile = dynamic(
  () => import('@/screens/tokens/components/list/components/tokens_list/components/mobile')
) as typeof MobileType;

const TokenList: React.FC<{ items: TokenType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return <>{isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />}</>;
};

export default TokenList;
