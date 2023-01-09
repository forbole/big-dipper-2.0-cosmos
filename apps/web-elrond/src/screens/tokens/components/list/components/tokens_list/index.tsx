import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import Desktop from '@/screens/tokens/components/list/components/tokens_list/components/desktop';
import Mobile from '@/screens/tokens/components/list/components/tokens_list/components/mobile';
import type { TokenType } from '@/screens/tokens/components/list/types';
import { FC } from 'react';

const TokenList: FC<{ items: TokenType[] }> = (props) => {
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
