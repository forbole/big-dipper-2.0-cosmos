import { useState } from 'react';
// import * as R from 'ramda';
// import { useRouter } from 'next/router';
// import {
//   useLastHundredBlocksSubscription,
//   LastHundredBlocksSubscription,
// } from '@graphql/types';

const dummyBlocks = {
  height: 345435,
  signed: true,
};

export const useBlocks = () => {
  const [state, _setState] = useState<{
    height: number;
    signed: boolean;
  }[]>(Array(100).fill(dummyBlocks));

  // const router = useRouter();

  // useLastHundredBlocksSubscription({
  //   variables: {
  //     address: R.pathOr('', ['query', 'address'], router),
  //   },
  //   onSubscriptionData: (data) => {
  //     setState(formatLastHundredBlocks(data.subscriptionData.data));
  //   },
  // });

  // const formatLastHundredBlocks = (data: LastHundredBlocksSubscription) => {
  //   return data.block.map((x) => {
  //     return {
  //       height: x.height,
  //       txs: x.transactions.length,
  //       proposer: x.validator.validatorInfo.operatorAddress,
  //       signed: x.precommits.length === 1,
  //     };
  //   });
  // };

  return {
    state,
  };
};
