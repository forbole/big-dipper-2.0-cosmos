import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import {
  Divider,
  Typography,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Box,
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
    uiData,
    onMessageFilterCallback,
    viewRaw,
    toggleMessageDisplay,
  } = useTransactionContext();
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  return (
    <Box className={classnames(className, classes.root)}>
      <div className={classes.header}>
        <div className={classes.mobileOptions}>
          <Typography variant="h2">
            {t('messages')}
          </Typography>
          <FormControlLabel
            control={(
              <Switch
                checked={viewRaw}
                onChange={toggleMessageDisplay}
                color="primary"
              />
            )}
            label={t('raw')}
          />
        </div>
        <div className={classes.desktopOptions}>
          <FormControlLabel
            control={(
              <Switch
                checked={viewRaw}
                onChange={toggleMessageDisplay}
                color="primary"
              />
            )}
            label={t('raw')}
          />
          <TransactionMessagesFilter
            className={classes.filter}
            callback={onMessageFilterCallback}
          />
        </div>
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
                itemCount={uiData.messages.length}
                itemSize={getRowHeight}
                ref={listRef}
                width={width}
              >
                {({
                  index, style,
                }) => {
                  const { rowRef } = useListRow(index, setRowHeight);
                  const selectedItem = uiData.messages[index];
                  return (
                    <div style={style}>
                      <div ref={rowRef}>
                        <div className={classes.item}>
                          <div className={classes.tags}>
                            {selectedItem.type}
                          </div>
                          {selectedItem.message}
                        </div>
                        {index !== uiData.messages.length - 1 && <Divider />}
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
