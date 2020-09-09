import {
  useState,
  useEffect,
} from 'react';

export const useTransaction = () => {
  const TOTAL_INSTRUCTION = 2;
  const instruction = {
    parsed: {
      info: {
        destination: 'AXUChvpRwUUPMJhA4d23WcoyAL7W8zgAeo7KoH57c75F',
        lamports: 8287,
        source: 'AXUChvpRwUUPMJhA4d23WcoyAL7W8zgAeo7KoH57c75F',
      },
      type: 'transfer',
    },
    program: 'system',
    programId: '11111111111111111111111111111111',
  };

  const fakeData = {
    slot: '812,768,640',
    signature: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
    amount: 123,
    success: true,
    time: 1615187146246,
    instructions: Array(TOTAL_INSTRUCTION).fill(instruction),
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

  return {
    item,
  };
};
