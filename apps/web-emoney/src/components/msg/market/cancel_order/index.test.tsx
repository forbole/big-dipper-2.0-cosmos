import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@/tests/utils';
import MsgCancelOrder from '@/models/msg/market/msg_cancel_order';
import CancelOrder from '@/components/msg/market/cancel_order';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CancelOrder', () => {
  it('matches snapshot', () => {
    const message: MsgCancelOrder = {
      category: 'market',
      type: 'MsgCancelOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CancelOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
