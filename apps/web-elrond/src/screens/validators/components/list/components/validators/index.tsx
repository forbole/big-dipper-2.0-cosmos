import { FC } from 'react';
import NoData from '@/components/no_data';
import Desktop from '@/screens/validators/components/list/components/validators/components/desktop';
import Mobile from '@/screens/validators/components/list/components/validators/components/mobile';
import { useProviders } from '@/screens/validators/components/list/components/validators/hooks';
import type { SearchType, ValidatorType } from '@/screens/validators/components/list/types';
import { useDisplayStyles } from '@/styles/useSharedStyles';

const Validators: FC<{ search: SearchType; items: ValidatorType[] }> = (props) => {
  const { state, handleSort, sortItems, search } = useProviders(props.search);
  const display = useDisplayStyles().classes;

  const items = sortItems(props.items);

  if (!props.items.length) {
    return <NoData />;
  }

  return (
    <>
      <Desktop
        sortDirection={state.sortDirection}
        sortKey={state.sortKey}
        handleSort={handleSort}
        items={items}
        search={search}
        className={display.hiddenUntilLg}
      />
      <Mobile items={items} search={search} className={display.hiddenWhenLg} />
    </>
  );
};

export default Validators;
