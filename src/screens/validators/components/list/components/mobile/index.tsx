import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import { AvatarName } from '@components';
import {
  useList,
  useListRow,
} from '@hooks';
import { useValidatorsContext } from '../../contexts/validators';
import { SingleValidator } from './component';
import { VotingPower } from '..';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    items,
  } = useValidatorsContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formatItems = items.map((x, i) => {
    return ({
      idx: `#${i + 1}`,
      validator: (
        <AvatarName
          address={x.validator.identity}
          imageUrl={x.validator.image}
          name={x.validator.moniker}
        />
      ),
      self: x.self,
      commission: x.commission,
      votingPower: (
        <VotingPower
          percentage={x.votingPowerPercent}
          content={`${x.votingPower}`}
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
              itemCount={formatItems.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = formatItems[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      <SingleValidator {... selectedItem} />
                      {index !== formatItems.length - 1 && <Divider />}
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
