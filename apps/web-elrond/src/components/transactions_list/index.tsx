import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks/use_screen_size';
import dynamic from 'next/dynamic';
import { FC } from 'react';

const Desktop = dynamic(() => import('@/components/transactions_list/components/desktop'));
const Mobile = dynamic(() => import('@/components/transactions_list/components/mobile'));

const TransactionsList: FC<{ items: TransactionType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />;
};

export default TransactionsList;
