import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Divider } from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import { useValidatorsContext } from '../../contexts/validators';
import { SingleValidator } from './component';

const Mobile: React.FC<{
  className?: string;
}> = ({ className }) => {
  const {
    uiData,
  } = useValidatorsContext();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

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
              itemCount={uiData.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = uiData[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      <SingleValidator {... selectedItem} />
                      {index !== uiData.length - 1 && <Divider />}
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
