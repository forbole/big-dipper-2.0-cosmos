import { useScreenSize } from '@/hooks';
import NoData from '@/components/no_data';
import Desktop from '@/screens/validators/components/list/components/validators/components/desktop';
import Mobile from '@/screens/validators/components/list/components/validators/components/mobile';
import { useProviders } from '@/screens/validators/components/list/components/validators/hooks';
import type { SearchType, ValidatorType } from '@/screens/validators/components/list/types';
import { FC } from 'react';

const Validators: FC<{ search: SearchType; items: ValidatorType[] }> = (props) => {
  const { isDesktop } = useScreenSize();
  const { state, handleSort, sortItems, search } = useProviders(props.search);

  const items = sortItems(props.items);

  if (!props.items.length) {
    return <NoData />;
  }

  if (isDesktop) {
    return (
      <Desktop
        sortDirection={state.sortDirection}
        sortKey={state.sortKey}
        handleSort={handleSort}
        items={items}
        search={search}
      />
    );
  }

  return <Mobile items={items} search={search} />;
};

export default Validators;
