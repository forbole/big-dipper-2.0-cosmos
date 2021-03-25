import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Overview from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  BoxDetails: (props) => <div id="BoxDetails" {...props} />,
  Result: (props) => <div id="Result" {...props} />,
}));

jest.mock('dayjs', () => {
  const mockTest = () => ({
    format: jest.fn(() => '2020-08-10 12:00:00'),
  });
  return mockTest;
});

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
describe('screen: BlockDetails/Overview', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Overview />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
