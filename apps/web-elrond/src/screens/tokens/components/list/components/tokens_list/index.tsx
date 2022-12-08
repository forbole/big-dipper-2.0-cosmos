import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import type { TokenType } from '@/screens/tokens/components/list/types';
import dynamic from 'next/dynamic';
import React from 'react';

const Desktop = dynamic(
  () => import('@/screens/tokens/components/list/components/tokens_list/components/desktop')
);
const Mobile = dynamic(
  () => import('@/screens/tokens/components/list/components/tokens_list/components/mobile')
);

const TokenList: React.FC<{ items: TokenType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  if (isDesktop) {
    return <Desktop items={props.items} />;
  }

  return <Mobile items={props.items} />;
};

export default TokenList;
