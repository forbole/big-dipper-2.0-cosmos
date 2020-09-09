import React from 'react';
import classnames from 'classnames';
import { VariableSizeList as List } from 'react-window';
import useTranslation from 'next-translate/useTranslation';
import AutoSizer from 'react-virtualized-auto-sizer';
import * as R from 'ramda';
import {
  Divider, Typography,
} from '@material-ui/core';
import {
  useList,
  useListRow,
} from '@hooks';
import {
  Box, Tag,
} from '@components';
import { useTransactionContext } from '../../contexts/transaction';
import { useStyles } from './styles';

const Instructions: React.FC<{
  className?: string;
}> = ({ className }) => {
  const { t } = useTranslation('transactions');
  const classes = useStyles();
  const {
    item,
  } = useTransactionContext();
  const {
    listRef,
    getRowHeight,
    setRowHeight,
  } = useList();

  const instructions = R.pathOr([], ['instructions'], item);

  const formatItems = instructions.map((x) => {
    return ({
      program: (
        <Tag value={x.program} theme="two" />
      ),
      type: (
        <Tag value={x.parsed.type} theme="two" />
      ),
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent libero dolor, sollicitudin fringilla augue gravida, tincidunt viverra odio. Curabitur sit amet erat ultricies nisi posuere bibendum.',
    });
  });

  return (
    <Box className={classnames(className, classes.root)}>
      <Typography variant="h2">
        {t('instructions')}
      </Typography>
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
                            {selectedItem.program}
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

export default Instructions;
