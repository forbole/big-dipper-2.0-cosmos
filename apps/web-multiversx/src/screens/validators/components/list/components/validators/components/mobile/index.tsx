import Divider from '@mui/material/Divider';
import numeral from 'numeral';
import { FC, LegacyRef } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ListChildComponentProps, VariableSizeList as List } from 'react-window';
import AvatarName from '@/components/avatar_name';
import { useList, useListRow } from '@/hooks/use_react_window';
import SingleValidator from '@/screens/validators/components/list/components/validators/components/mobile/component/single_validator';
import useStyles from '@/screens/validators/components/list/components/validators/components/mobile/styles';
import VotingPower from '@/screens/validators/components/list/components/validators/components/voting_power';
import type { ValidatorType } from '@/screens/validators/components/list/types';
import { formatNumber } from '@/utils/format_token';
import { NODE_DETAILS, VALIDATOR_DETAILS } from '@/utils/go_to_page';

type ListItemProps = Pick<ListChildComponentProps, 'index' | 'style'> & {
  setRowHeight: Parameters<typeof useListRow>[1];
  item: ValidatorType;
  isLast: boolean;
  search: string;
};

const ListItem: FC<ListItemProps> = ({ index, style, setRowHeight, item, isLast, search }) => {
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
        {!isLast && <Divider />}
      </div>
    </div>
  );
};

type MobileProps = {
  className?: string;
  items: ValidatorType[];
  search: string;
};

const Mobile: FC<MobileProps> = ({ className, items, search }) => {
  const { classes, cx } = useStyles();
  const { listRef, getRowHeight, setRowHeight } = useList();

  return (
    <div className={cx(classes.root, className)}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height ?? 0}
            itemCount={items.length}
            itemSize={getRowHeight}
            ref={listRef as LegacyRef<List>}
            width={width ?? 0}
          >
            {({ index, style }) => (
              <ListItem
                key={items[index].validator.address}
                index={index}
                item={items[index]}
                style={style}
                setRowHeight={setRowHeight}
                isLast={index === items.length - 1}
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
