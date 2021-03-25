import {
  useState,
  useEffect,
} from 'react';

export const useTransaction = () => {
  const TOTAL_INSTRUCTION = 2;
  const message = {
    '@type': '/cosmos.bank.v1beta1.MsgSend',
    amount: [
      {
        denom: 'udaric',
        amount: '1100000',
      },
    ],
    to_address: 'desmos1srujv22zfrwyfvu2vyyaqqq3f0z7yjeaggd9n2',
    from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
  };

  const fakeData = {
    height: '812,768,640',
    hash: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
    fee: '123 udaric',
    success: true,
    time: 1615187146246,
    memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel cursus tortor. Fusce lobortis sollicitudin dolor id mollis. Nullam quam ex, dignissim eu eros vel, tincidunt ultrices ligula.',
    messages: Array(TOTAL_INSTRUCTION).fill(message),
  };

  const [state, setState] = useState({
    item: {},
  });
  const {
    item,
  } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      item: fakeData,
    }));
  }, []);

  const onMessageFilterCallback = (value: string) => {
    console.log(`filtered value: ${value}`);
  };

  return {
    item,
    onMessageFilterCallback,
  };
};
