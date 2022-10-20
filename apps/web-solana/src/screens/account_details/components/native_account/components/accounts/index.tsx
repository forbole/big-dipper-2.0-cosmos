import React from 'react';
import classnames from 'classnames';
import {
  Box,
  TabPanel,
  Loading,
} from '@components';
import { useAccountsHook } from './hooks';
import {
  Tabs, List,
} from './components';

const Accounts: React.FC<ComponentDefault> = (props) => {
  const {
    handleTabChange,
    tab,
    state,
  } = useAccountsHook();
  const tabs = [];

  if (state.stake.length) {
    tabs.push({
      id: tabs.length,
      key: 'accountStake',
      data: state.stake,
      count: state.stake.length,
    });
  }

  if (state.vote.length) {
    tabs.push({
      id: tabs.length,
      key: 'accountVote',
      data: state.vote,
      count: state.vote.length,
    });
  }

  if (state.nonce.length) {
    tabs.push({
      id: tabs.length,
      key: 'accountNonce',
      data: state.nonce,
      count: state.nonce.length,
    });
  }

  if (state.token.length) {
    tabs.push({
      id: tabs.length,
      key: 'accountToken',
      data: state.token,
      count: state.token.length,
    });
  }

  if (!state.loading && !tabs.length) {
    return null;
  }

  return (
    <Box className={classnames(props.className)}>
      {state.loading ? (
        <Loading />
      ) : (
        <>
          <Tabs
            tab={tab}
            handleTabChange={handleTabChange}
            tabs={tabs}
          />
          {tabs.map((x) => {
            return (
              <TabPanel
                key={x.id}
                index={x.id}
                value={tab}
              >
                <List
                  data={x.data}
                  count={x.count}
                />
              </TabPanel>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default Accounts;
