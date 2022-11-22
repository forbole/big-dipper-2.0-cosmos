import NoData from '@components/no_data';
import dynamic from 'next/dynamic';
import React, { ComponentProps, FC } from 'react';
import { useScreenSize } from 'ui/hooks/use_screen_size';
import type DesktopType from './components/desktop';
import type MobileType from './components/mobile';

const Desktop = dynamic(() => import('./components/desktop')) as FC<
  ComponentProps<typeof DesktopType>
>;
const Mobile = dynamic(() => import('./components/mobile')) as FC<
  ComponentProps<typeof MobileType>
>;

const TransactionsList: FC<{ items: TransactionType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return <>{isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />}</>;
};

export default TransactionsList;
