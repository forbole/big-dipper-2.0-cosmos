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
import { getMessageByType } from '@msg';
import { useStyles } from './styles';

const Messages: React.FC<{
  className?: string;
  messages: any[];
  viewRaw: boolean;
  toggleMessageDisplay: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMessageFilterCallback: (value: string) => void;
}> = ({
  className, ...props
}) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();

  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const formattedItems = props.messages.map((x) => {
    return getMessageByType(x, props.viewRaw, t);
  });

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
                checked={props.viewRaw}
                onChange={props.toggleMessageDisplay}
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
                checked={props.viewRaw}
                onChange={props.toggleMessageDisplay}
                color="primary"
              />
            )}
            label={t('raw')}
          />
          <TransactionMessagesFilter
            className={classes.filter}
            callback={props.onMessageFilterCallback}
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
                itemCount={props.messages.length}
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
                        <div className={classes.item}>
                          <div className={classes.tags}>
                            {selectedItem.type}
                          </div>
                          <span className="msg">
                            {selectedItem.message}
                          </span>
                        </div>
                        {index !== props.messages.length - 1 && <Divider />}
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
