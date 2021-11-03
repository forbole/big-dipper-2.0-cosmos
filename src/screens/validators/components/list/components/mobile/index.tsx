import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import { AvatarName } from '@components';
import { getValidatorConditionClass } from '@utils/get_validator_condition';
import {
  useList,
  useListRow,
} from '@hooks';
import { SingleValidator } from './component';
import {
  Condition, VotingPower,
} from '..';
import { ItemType } from '../../types';

const Mobile: React.FC<{
  className?: string;
  items: ItemType[];
}> = ({
  className, items,
}) => {
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = items.map((x, i) => {
    const condition = x.status === 3 ? getValidatorConditionClass(x.condition) : undefined;
    return ({
      idx: `#${i + 1}`,
      delegators: numeral(x.delegators).format('0,0'),
      validator: (
        <AvatarName
          address={x.validator.address}
          imageUrl={x.validator.imageUrl}
          name={x.validator.name}
        />
      ),
      commission: `${numeral(x.commission).format('0.[00]')}%`,
      self: `${numeral(x.selfPercent).format('0.[00]')}%`,
      condition: (
        <Condition className={condition} />
      ),
      votingPower: (
        <VotingPower
          percentDisplay={`${numeral(x.votingPowerPercent).format('0.[00]')}%`}
          percentage={x.votingPowerPercent}
          content={numeral(x.votingPower).format('0,0')}
        />
      ),
    });
  });

  return (
    <div className={classnames(className)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={formattedItems.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = formattedItems[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      <SingleValidator {... selectedItem} />
                      {index !== formattedItems.length - 1 && <Divider />}
                    </div>
                  </div>
                );
              }}
            </List>
          );
        }}
      </AutoSizer>
    </div>
  );
};

export default Mobile;
