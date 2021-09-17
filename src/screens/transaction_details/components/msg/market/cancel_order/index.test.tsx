import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgCancelOrder } from '@models';
import CancelOrder from '.';

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
describe('screen: TransactionDetails/CancelOrder', () => {
  it('matches snapshot', () => {
    const message = new MsgCancelOrder({
      category: 'market',
      type: 'MsgCancelOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
    });
    const component = renderer.create(
      <MockTheme>
        <CancelOrder
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
