import React from 'react';
import dynamic from 'next/dynamic';
import { NoData } from '@components';
import { useScreenSize } from '@hooks';
import { ItemType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const BlocksList: React.FC<{items: ItemType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return (
      <NoData />
    );
  }

  return (
    <>
      {isDesktop ? (
        <Desktop items={props.items} />
      ) : (
        <Mobile items={props.items} />
      )}
    </>
  );
};

export default BlocksList;
