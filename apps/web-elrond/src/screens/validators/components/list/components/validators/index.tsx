import React from 'react';
import dynamic from 'next/dynamic';
import { useScreenSize } from '@hooks';
import {
  NoData,
} from '@components';
import { useProviders } from './hooks';
import {
  ValidatorType,
  SearchType,
} from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Validators: React.FC<
{search: SearchType, items: ValidatorType[]} &ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();
  const {
    state,
    handleSort,
    sortItems,
  } = useProviders(props.search);

  const items = sortItems(props.items);

  return (
    <>
      {props.items.length ? (
        <>
          {isDesktop ? (
            <Desktop
              sortDirection={state.sortDirection}
              sortKey={state.sortKey}
              handleSort={handleSort}
              items={items}
            />
          ) : (
            <Mobile
              items={items}
            />
          )}
        </>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default Validators;
