import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgAddLimitOrder } from '@models';
import AddLimitOrder from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/AddLimitOrder', () => {
  it('matches snapshot', () => {
    const message = new MsgAddLimitOrder({
      category: 'market',
      type: 'MsgAddLimitOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      timeInForce: 'Unspecified',
      source: {
        denom: 'udaric',
        amount: 100000,
      },
      destination: {
        denom: 'udarics',
        amount: 500000,
      },
    });
    const component = renderer.create(
      <MockTheme>
        <AddLimitOrder
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
