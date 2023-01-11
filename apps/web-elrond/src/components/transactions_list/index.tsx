import NoData from '@/components/no_data';
import { useScreenSize } from '@/hooks/use_screen_size';
import Desktop from '@/components/transactions_list/components/desktop';
import Mobile from '@/components/transactions_list/components/mobile';
import { FC } from 'react';

const TransactionsList: FC<{ items: TransactionType[] }> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.items.length) {
    return <NoData />;
  }

  return isDesktop ? <Desktop items={props.items} /> : <Mobile items={props.items} />;
};

export default TransactionsList;
