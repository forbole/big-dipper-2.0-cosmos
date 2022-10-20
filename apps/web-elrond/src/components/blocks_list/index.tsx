import React from 'react';
import dynamic from 'next/dynamic';
import {
  useScreenSize,
} from '@hooks';
import { BlockListType } from './types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const BlocksList: React.FC<BlockListType & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  let component = null;

  if (isDesktop) {
    component = <Desktop items={props.items} />;
  } else {
    component = <Mobile items={props.items} />;
  }

  return (
    <>{component}</>
  );
};

export default BlocksList;
