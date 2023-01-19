import NoData from '@/components/no_data';
import Desktop from '@/components/transactions_list/components/desktop';
import Mobile from '@/components/transactions_list/components/mobile';
import { useDisplayStyles } from '@/styles/useSharedStyles';
import { FC } from 'react';

const TransactionsList: FC<{ items: TransactionType[] }> = (props) => {
  const display = useDisplayStyles().classes;

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop items={props.items} className={display.hiddenUntilLg} />
      <Mobile items={props.items} className={display.hiddenWhenLg} />
    </>
  );
};

export default TransactionsList;
