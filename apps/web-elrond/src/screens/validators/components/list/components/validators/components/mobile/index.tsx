import React, { ComponentProps, FC } from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import Divider from '@material-ui/core/Divider';
import AvatarName from '@/components/avatar_name';
import { VALIDATOR_DETAILS, NODE_DETAILS } from '@/utils/go_to_page';
import { useList, useListRow } from '@/hooks';
import { formatNumber } from '@/utils/format_token';
import type { ValidatorType } from '@/screens/validators/components/list/types';
import SingleValidator from '@/screens/validators/components/list/components/validators/components/mobile/component/single_validator';
import VotingPower from '@/screens/validators/components/list/components/validators/components/voting_power';
import { useStyles } from '@/screens/validators/components/list/components/validators/components/mobile/styles';

const Mobile: FC<{
  className?: string;
  items: ValidatorType[];
}> = ({ className, items }) => {
  const classes = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

  const formattedItems =
    items?.map((x, i) => ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
          href={x.isNode ? NODE_DETAILS : VALIDATOR_DETAILS}
        />
      ),
      locked: (
        <VotingPower
          percentDisplay={`${x.stakePercent}%`}
          percentage={x.stakePercent}
          content={formatNumber(x.locked.value, 2)}
        />
      ),
      stake: `${formatNumber(
        x.stake.value,
        x.stake.exponent
      )} ${x.stake.displayDenom.toUpperCase()}`,
      nodes: x.nodes ? numeral(x.nodes).format('0,0') : '-',
      delegators: x.delegators ? numeral(x.delegators).format('0,0') : '-',
      commission: x.commission ? `${numeral(x.commission * 100).format('0,0.[00]')}%` : '-',
      apr: x.apr ? `${x.apr}%` : '-',
    })) ?? [];

  return (
    <div className={classnames(className, classes.root)}>
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
