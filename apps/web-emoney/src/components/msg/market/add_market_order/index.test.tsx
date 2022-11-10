import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgAddMarketOrder from '@models/emoney/msg/market/msg_add_market_order';
import AddMarketOrder from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AddLimitOrder', () => {
  it('matches snapshot', () => {
    const message = new MsgAddMarketOrder({
      category: 'market',
      type: 'MsgAddMarketOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      timeInForce: 'Unspecified',
      source: 'source',
      destination: {
        denom: 'udarics',
        amount: 500000,
      },
      maxiumSlippage: '0.05',
    });
    const component = renderer.create(
      <MockTheme>
        <AddMarketOrder message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
