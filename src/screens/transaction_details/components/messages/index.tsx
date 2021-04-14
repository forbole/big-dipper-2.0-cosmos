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
import {
  Box,
  Tag,
  TransactionMessagesFilter,
} from '@components';
import { useTransactionContext } from '../../contexts/transaction';
import { useStyles } from './styles';

const Messages: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    rawData,
    onMessageFilterCallback,
  } = useTransactionContext();
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formatItems = rawData.messages.map((x) => {
    return ({
      type: <Tag value={x['@type']} theme="two" />,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero dolor, sollicitudin fringilla augue gravida, tincidunt viverra odio. Curabitur sit amet erat ultricies nisi posuere bibendum.',
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <Typography variant="h2">
          {t('messages')}
        </Typography>
        <TransactionMessagesFilter
          className={classes.filter}
          callback={onMessageFilterCallback}
        />
      </div>
      <Divider />
      <div className={classes.list}>
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
                        {/* setup individual message types later */}
                        <div className={classes.fakeItem}>
                          <div className={classes.tags}>
                            {selectedItem.type}
                          </div>
                          <Typography>
                            {selectedItem.message}
                          </Typography>
                        </div>
                        {/* setup individual message types later */}
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
    </Box>
  );
};

export default Messages;
