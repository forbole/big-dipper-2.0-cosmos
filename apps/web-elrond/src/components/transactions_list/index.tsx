import React from 'react';
import dynamic from 'next/dynamic';
import NoData from '@components/no_data';
import { useScreenSize } from '@hooks';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const TransactionsList: React.FC<{ items: TransactionType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return <>{isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />}</>;
};

export default TransactionsList;
