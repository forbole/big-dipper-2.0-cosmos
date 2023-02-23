import Desktop from '@/components/blocks_list/components/desktop';
import Mobile from '@/components/blocks_list/components/mobile';
import type { BlockListType } from '@/components/blocks_list/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC } from 'react';

const BlocksList: FC<BlockListType & ComponentDefault> = (props) => {
  const display = useDisplayStyles().classes;

  return (
    <>
      <Desktop items={props.items} className={display.hiddenUntilLg} />
      <Mobile items={props.items} className={display.hiddenWhenLg} />
    </>
  );
};

export default BlocksList;
