import NoData from '@/components/no_data';
import type DesktopType from '@/components/transactions_list/components/desktop';
import type MobileType from '@/components/transactions_list/components/mobile';
import { useScreenSize } from '@/hooks/use_screen_size';
import dynamic from 'next/dynamic';
import { ComponentProps, FC } from 'react';

const Desktop = dynamic(() => import('@/components/transactions_list/components/desktop')) as FC<
  ComponentProps<typeof DesktopType>
>;
const Mobile = dynamic(() => import('@/components/transactions_list/components/mobile')) as FC<
  ComponentProps<typeof MobileType>
>;

const TransactionsList: FC<{ items: TransactionType[] } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />;
};

export default TransactionsList;
