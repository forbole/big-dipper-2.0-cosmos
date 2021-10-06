import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSwapSend } from '@models';
import SwapSend from '.';

// ==================================
// mocks
// ==================================
jest.mock('@contexts', () => ({
  useChainContext: () => ({
    findAddress: jest.fn(() => ({
      moniker: 'moniker',
      imageUrl: null,
    })),
  }),
}));

jest.mock('@components', () => ({
  Name: (props) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SwapSend', () => {
  it('matches snapshot', () => {
    const message = new MsgSwapSend({
      type: 'MsgSwapSend',
      fromAddress: 'fromAddress',
      toAddress: 'toAddress',
      offerCoin: {
        denom: 'uluna',
        amount: '10000000',
      },
      askDenom: 'ukrw',
    });
    const component = renderer.create(
      <MockTheme>
        <SwapSend
          message={message}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
