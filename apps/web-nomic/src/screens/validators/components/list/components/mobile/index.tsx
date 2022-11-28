import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Divider from '@material-ui/core/Divider';
import AvatarName from '@/components/avatar_name';
import { useList, useListRow } from '@/hooks';
import { getValidatorStatus } from '@/utils/get_validator_status';
import SingleValidator from '@/screens/validators/components/list/components/mobile/component/single_validator';
import VotingPower from '@/screens/validators/components/list/components/voting_power';
import type { ItemType } from '@/screens/validators/components/list/types';

const Mobile: FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const { listRef, getRowHeight, setRowHeight } = useList();

  const formattedItems =
    items?.map((x, i) => {
      const status = getValidatorStatus(x.inActiveSet, x.jailed, x.tombstoned);
      const percentDisplay = x.inActiveSet
        ? `${numeral(x.votingPowerPercent).format('0.[00]')}%`
        : '0%';
      const votingPower = numeral(x.votingPower).format('0,0');
      return {
        idx: `#${i + 1}`,
        validator: (
          <AvatarName
            address={x.validator.address}
            imageUrl={x.validator.imageUrl}
            name={x.validator.name}
          />
        ),
        commission: `${numeral(x.commission).format('0.[00]')}%`,
        votingPower: (
          <VotingPower
            percentDisplay={percentDisplay}
            percentage={x.votingPowerPercent}
            content={votingPower}
            topVotingPower={x.topVotingPower ?? false}
          />
        ),
        status,
      };
    }) ?? [];

  return (
    <div className={classnames(className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height}
            itemCount={formattedItems.length}
            itemSize={getRowHeight}
            ref={listRef as React.LegacyRef<List>}
            width={width}
          >
            {({ index, style }) => <ListItem {...{ index, style, setRowHeight, formattedItems }} />}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: Parameters<typeof useListRow>[1];
    formattedItems: Array<ComponentProps<typeof SingleValidator>>;
  }
> = ({ index, style, setRowHeight, formattedItems }) => {
  const { rowRef } = useListRow(index, setRowHeight);
  const selectedItem = formattedItems[index];
  return (
    <div style={style}>
      <div ref={rowRef}>
        <SingleValidator {...selectedItem} />
        {index !== formattedItems.length - 1 && <Divider />}
      </div>
    </div>
  );
};

export default Mobile;
