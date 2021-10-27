import React from 'react';
import { Multisend } from '@msg';
import { MsgMultiSend } from '@models';

const Msg = () => {
  const message = new MsgMultiSend({
    category: 'bank',
    type: 'MsgMultiSend',
    inputs: [
      {
        address: 'desmos1f0p4fae5jv36cwrgu5nk2hunptdzfqnmg40n5z',
        coins: [
          {
            denom: 'udsm',
            amount: '20000000',
          },
        ],
      },
    ],
    outputs: [
      {
        address: 'desmos1nxu2qzdheycs58k6j9xgvpz3n35a4rvneqveyc',
        coins: [
          {
            denom: 'udsm',
            amount: '19000000',
          },
        ],
      },
      {
        address: 'desmos1jh753mzjy358jf86cfqqzkrrtqqefhjxxxshn8',
        coins: [
          {
            denom: 'udsm',
            amount: '1000000',
          },
        ],
      },
    ],
  });
  return (
    <Multisend
      message={message}
    />
  );
};

export default Msg;
