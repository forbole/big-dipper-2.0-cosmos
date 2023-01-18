import NoData from '@/components/no_data';
import Desktop from '@/components/transactions_list/components/desktop';
import Mobile from '@/components/transactions_list/components/mobile';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const TransactionsList: FC<{ items: TransactionType[] }> = (props) => {
  const { classes } = useSharedStyles();

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop items={props.items} className={classes.hiddenUntilLg} />
      <Mobile items={props.items} className={classes.hiddenWhenLg} />
    </>
  );
};

export default TransactionsList;
