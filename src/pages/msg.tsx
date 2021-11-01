import React from 'react';
import { SetWithdrawalAddress } from '@msg';
import { MsgSetWithdrawAddress } from '@models';

const Msg = () => {
  const message = new MsgSetWithdrawAddress({
    category: 'distribution',
    type: 'MsgSetWithdrawAddress',
    delegatorAddress: 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c',
    withdrawalAddress: 'desmos10zge65rt7xyvn9fp5xfuje94td55fn3fepnav0',
  });

  return (
    <SetWithdrawalAddress
      message={message}
    />
  );
};

export default Msg;
