import NoData from '@/components/no_data';
import Desktop from '@/screens/tokens/components/list/components/tokens_list/components/desktop';
import Mobile from '@/screens/tokens/components/list/components/tokens_list/components/mobile';
import type { TokenType } from '@/screens/tokens/components/list/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC } from 'react';

const TokenList: FC<{ items: TokenType[] }> = (props) => {
  const display = useDisplayStyles().classes;

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop items={props.items} className={display.hiddenUntilLg} />
      <Mobile items={props.items} className={display.hiddenWhenLg} />
    </>
  );
};

export default TokenList;
