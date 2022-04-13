import React from 'react';
import classnames from 'classnames';
import { Typography } from '@material-ui/core';
import useTranslation from 'next-translate/useTranslation';
import {
  ContractMessagesList,
  Box,
} from '@components';
import { useStyles } from './styles';
import { useMessages } from './hooks';

type ContractMessagesComponent = {
  className?: string;
  address: string;
}

const ContractMessages: React.FC<ContractMessagesComponent> = (props) => {
  const classes = useStyles();
  const { t } = useTranslation('transactions');

  const {
    state,
    loadNextPage,
  } = useMessages(props.address);

  const loadMoreItems = state.isNextPageLoading ? () => null : loadNextPage;
  const isItemLoaded = (index) => !state.hasNextPage || index < state.data.length;
  const itemCount = state.hasNextPage ? state.data.length + 1 : state.data.length;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('messages')}
      </Typography>
      <div className={classes.list}>
        <ContractMessagesList
          messages={state.data}
          itemCount={itemCount}
          hasNextPage={state.hasNextPage}
          isNextPageLoading={state.isNextPageLoading}
          loadNextPage={loadNextPage}
          loadMoreItems={loadMoreItems}
          isItemLoaded={isItemLoaded}
        />
      </div>
    </Box>
  );
};

export default ContractMessages;
