import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Instructions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  Tag: (props) => <div id="Tag" {...props} />,
  TransactionMessagesFilter: (props) => <div id="TransactionMessagesFilter" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

jest.mock('../../contexts/transaction', () => ({
  useTransactionContext: () => ({
    item: {
      height: '812,768,640',
      hash: '4SGxuRMcseNbwki3tGxXPpfz7iFnuo9FUpTfiM4gJ8rhH59uZYSBBK2zW27xRdGX8Sb2N4VkGUnBYt59SBKEhPfB',
      fee: '123 udaric',
      success: true,
      time: 1615187146246,
      memo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel cursus tortor. Fusce lobortis sollicitudin dolor id mollis. Nullam quam ex, dignissim eu eros vel, tincidunt ultrices ligula.',
      messages: [{
        '@type': '/cosmos.bank.v1beta1.MsgSend',
        amount: [
          {
            denom: 'udaric',
            amount: '1100000',
          },
        ],
        to_address: 'desmos1srujv22zfrwyfvu2vyyaqqq3f0z7yjeaggd9n2',
        from_address: 'desmos1dzn2s7l0wm9kekyazcnhapu8j95n90efmcmrad',
      }],
    },
  }),
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Instructions />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
