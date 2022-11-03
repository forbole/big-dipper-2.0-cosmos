import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCancelReplaceLimitOrder } from '@models';
import CancelReplaceLimitOrder from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CancelReplaceLimitOrder', () => {
  it('matches snapshot', () => {
    const message = new MsgCancelReplaceLimitOrder({
      category: 'market',
      type: 'MsgAddLimitOrder',
      owner: 'owner',
      originalClientOrderId: 'originalClientOrderId',
      newClientOrderId: 'newClientOrderId',
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
        <CancelReplaceLimitOrder
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
