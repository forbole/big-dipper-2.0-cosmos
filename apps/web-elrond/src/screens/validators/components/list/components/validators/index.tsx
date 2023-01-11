import NoData from '@/components/no_data';
import Desktop from '@/screens/validators/components/list/components/validators/components/desktop';
import Mobile from '@/screens/validators/components/list/components/validators/components/mobile';
import { useProviders } from '@/screens/validators/components/list/components/validators/hooks';
import type { SearchType, ValidatorType } from '@/screens/validators/components/list/types';
import useSharedStyles from '@/styles/useSharedStyles';
import { FC } from 'react';

const Validators: FC<{ search: SearchType; items: ValidatorType[] }> = (props) => {
  const { state, handleSort, sortItems, search } = useProviders(props.search);
  const { classes } = useSharedStyles();

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
        className={classes.hiddenUntilLg}
      />
      <Mobile items={items} search={search} className={classes.hiddenWhenLg} />
    </>
  );
};

export default Validators;
