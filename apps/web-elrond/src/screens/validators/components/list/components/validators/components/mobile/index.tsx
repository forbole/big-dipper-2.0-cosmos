import AvatarName from '@/components/avatar_name';
import { useList, useListRow } from '@/hooks';
import SingleValidator from '@/screens/validators/components/list/components/validators/components/mobile/component/single_validator';
import { useStyles } from '@/screens/validators/components/list/components/validators/components/mobile/styles';
import VotingPower from '@/screens/validators/components/list/components/validators/components/voting_power';
import type { ValidatorType } from '@/screens/validators/components/list/types';
import { formatNumber } from '@/utils/format_token';
import { NODE_DETAILS, VALIDATOR_DETAILS } from '@/utils/go_to_page';
import Divider from '@material-ui/core/Divider';
import classnames from 'classnames';
import numeral from 'numeral';
import React, { FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';

type Props = {
  className?: string;
  items: ValidatorType[];
  search: string;
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    item: ValidatorType;
    items: ValidatorType[];
    search: string;
  }
> = ({ index, style, setRowHeight, item, items, search }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const { name, address, imageUrl } = item.validator;

  if (search) {
    const formattedSearch = search.toLowerCase().replace(/ /g, '');
    if (
      !name.toLowerCase().replace(/ /g, '').includes(formattedSearch) &&
      !address.toLowerCase().includes(formattedSearch)
    ) {
      return null;
    }
  }

  const selectedItem = {
    idx: `#${index + 1}`,
    validator: (
      <AvatarName
        address={address}
        imageUrl={imageUrl}
        name={name}
        href={item.isNode ? NODE_DETAILS : VALIDATOR_DETAILS}
      />
    ),
    locked: (
      <VotingPower
        percentDisplay={`${item.stakePercent}%`}
        percentage={item.stakePercent}
        content={formatNumber(item.locked.value, 2)}
      />
    ),
    stake: `${formatNumber(
      item.stake.value,
      item.stake.exponent
    )} ${item.stake.displayDenom.toUpperCase()}`,
    nodes: item.nodes ? numeral(item.nodes).format('0,0') : '-',
    delegators: item.delegators ? numeral(item.delegators).format('0,0') : '-',
    commission: item.commission ? `${numeral(item.commission * 100).format('0,0.[00]')}%` : '-',
    apr: item.apr ? `${item.apr}%` : '-',
  };
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleValidator {...selectedItem} />
        {index !== items.length - 1 && <Divider />}
      </div>
    </div>
  );
};

const Mobile: FC<Props> = ({ className, items, search }) => {
  const classes = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={items.length}
            itemSize={getRowHeight}
            ref={listRef as React.LegacyRef<List>}
            width={width}
          >
            {({ index, style }) => (
              <ListItem
                key={items[index].validator.address}
                index={index}
                item={items[index]}
                style={style}
                setRowHeight={setRowHeight}
                items={items}
                search={search}
              />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
