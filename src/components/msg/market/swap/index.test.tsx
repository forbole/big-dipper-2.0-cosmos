import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgSwap } from '@models';
import Swap from '.';

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
describe('screen: TransactionDetails/Swap', () => {
  it('matches snapshot', () => {
    const message = new MsgSwap({
      type: 'MsgSwap',
      trader: 'trader',
      offerCoin: {
        denom: 'uluna',
        amount: '10000000',
      },
      askDenom: 'ukrw',
    });
    const component = renderer.create(
      <MockTheme>
        <Swap
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
