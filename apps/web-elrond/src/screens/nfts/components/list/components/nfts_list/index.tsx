import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks';
import Desktop from '@/screens/nfts/components/list/components/nfts_list/components/desktop';
import Mobile from '@/screens/nfts/components/list/components/nfts_list/components/mobile';
import type { NFTTypes } from '@/screens/nfts/components/list/types';
import { FC } from 'react';

const NftsList: FC<{ items: NFTTypes[] }> = (props) => {
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
