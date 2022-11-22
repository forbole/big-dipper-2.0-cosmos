import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from 'ui/hooks';
import type { BlockListType } from './types';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as typeof DesktopType;
const Mobile = dynamic(() => import('./components/mobile')) as typeof MobileType;

const BlocksList: React.FC<BlockListType & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  let component = null;

  if (isDesktop) {
    component = <Desktop items={props.items} />;
  } else {
    component = <Mobile items={props.items} />;
  }

  return <>{component}</>;
};

export default BlocksList;
