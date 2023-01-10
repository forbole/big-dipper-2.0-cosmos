import Desktop from '@/components/blocks_list/components/desktop';
import Mobile from '@/components/blocks_list/components/mobile';
import type { BlockListType } from '@/components/blocks_list/types';
import { useScreenSize } from '@/hooks';
import { FC } from 'react';

const BlocksList: FC<BlockListType & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (isDesktop) {
    return <Desktop items={props.items} />;
  }

  return <Mobile items={props.items} />;
};

export default BlocksList;
