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
  TransactionMessagesFilter,
  Tag,
} from '@components';
import { MsgSubmitProposal } from '@models';
import { useTransactionContext } from '../../contexts/transaction';
import { useStyles } from './styles';
import { SubmitProposal } from '..';

const Messages: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    uiData,
    onMessageFilterCallback,
  } = useTransactionContext();
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  // wingman
  const formatItems = Array(2).fill(null).map((x) => {
    const message = MsgSubmitProposal.fromJson({
      '@type': '/cosmos.gov.v1beta1.MsgSubmitProposal',
      content: {
        '@type': '/cosmos.gov.v1beta1.TextProposal',
        title: 'test software upgrade proposal',
        description: 'something about the proposal here',
      },
      initial_deposit: [
        {
          denom: 'udaric',
          amount: '20000000',
        },
      ],
      proposer: 'desmos13yp2fq3tslq6mmtq4628q38xzj75ethzela9uu',
    });

    return ({
      type: <Tag value="hello world" theme="seven" />,
      message: <SubmitProposal message={message} />,
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
                // itemCount={uiData.messages.length}
                itemCount={formatItems.length}
                itemSize={getRowHeight}
                ref={listRef}
                width={width}
              >
                {({
                  index, style,
                }) => {
                  const { rowRef } = useListRow(index, setRowHeight);
                  // const selectedItem = uiData.messages[index];
                  const selectedItem = formatItems[index];
                  return (
                    <div style={style}>
                      <div ref={rowRef}>
                        {/* setup individual message types later */}
                        <div className={classes.item}>
                          <div className={classes.tags}>
                            {selectedItem.type}
                          </div>
                          {selectedItem.message}
                        </div>
                        {/* setup individual message types later */}
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
