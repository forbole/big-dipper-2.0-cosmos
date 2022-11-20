import Divider from '@material-ui/core/Divider';
import classnames from 'classnames';
import numeral from 'numeral';
import React, { ComponentProps, FC } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import AvatarName from 'ui/components/avatar_name';
import { useList, useListRow } from 'ui/hooks';
import { getValidatorConditionClass } from 'ui/utils/get_validator_condition';
import { getValidatorStatus } from 'ui/utils/get_validator_status';
import type { ItemType } from '../../types';
import Condition from '../condition';
import VotingPower from '../voting_power';
import SingleValidator from './component/single_validator';

const Mobile: FC<{
  className?: string;
  items: ItemType[];
}> = ({ className, items }) => {
  const { listRef, getRowHeight, setRowHeight } = useList();

  const formattedItems =
    items?.map((x, i) => {
      const status = getValidatorStatus(x.status, x.jailed, x.tombstoned);
      const condition = x.status === 3 ? getValidatorConditionClass(x.condition) : undefined;
      const percentDisplay =
        x.status === 3 ? `${numeral(x.votingPowerPercent).format('0.[00]')}%` : '0%';
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
        condition: <Condition className={condition} />,
        votingPower: (
          <VotingPower
            percentDisplay={percentDisplay}
            percentage={x.votingPowerPercent}
            content={votingPower}
            topVotingPower={x.topVotingPower ?? false}
          />
        ),
        status,
        liquidStaking: x.liquidStaking,
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
              {({ index, style }) => (
                <ListItem {...{ index, style, setRowHeight, formattedItems }} />
              )}
            </List>
          )}
      </AutoSizer>
    </div>
  );
};

const ListItem: FC<
  Pick<ListChildComponentProps, 'index' | 'style'> & {
    setRowHeight: ReturnType<typeof useList>['setRowHeight'];
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
