import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import { AvatarName } from '@components';
import { useStyles } from './styles';

const Mobile: React.FC<{
  className?: string;
  signatures?: AvatarName[];
}> = ({
  className, signatures,
}) => {
  const { t } = useTranslation('blocks');

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();
  const classes = useStyles();

  return (
    <div className={classnames(className, classes.root)}>
      <AutoSizer>
        {({
          height, width,
        }) => {
          return (
            <List
              className="List"
              height={height}
              itemCount={signatures.length}
              itemSize={getRowHeight}
              ref={listRef}
              width={width}
            >
              {({
                index, style,
              }) => {
                const { rowRef } = useListRow(index, setRowHeight);
                const selectedItem = signatures[index];
                return (
                  <div style={style}>
                    <div ref={rowRef}>
                      {/* single signature start */}
                      <div className={classes.itemWrapper}>
                        <div className={classes.item}>
                          <Typography variant="h4" className="label">
                            {t('validator')}
                          </Typography>
                          <AvatarName
                            address={selectedItem.address}
                            imageUrl={selectedItem.imageUrl}
                            name={selectedItem.name}
                          />
                        </div>
                      </div>
                      {/* single signature end */}
                      {index !== signatures.length - 1 && <Divider />}
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
