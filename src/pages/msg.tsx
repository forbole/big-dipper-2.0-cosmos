import React from 'react';
import { Fund } from '@msg';
import { MsgFundCommunityPool } from '@models';

const Msg = () => {
  const message = new MsgFundCommunityPool({
    category: 'distribution',
    type: 'MsgFundCommunityPool',
    depositor: 'desmos134zrg6jn3a5l5jjpzv9eucdlw3nl2qelgz330c',
    amount: [
      {
        denom: 'udsm',
        amount: '2000000',
      },
    ],
  });

  return (
    <Fund
      message={message}
    />
  );
};

export default Msg;
