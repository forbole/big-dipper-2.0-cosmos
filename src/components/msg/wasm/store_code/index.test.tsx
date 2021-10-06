import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgStoreCode } from '@models';
import StoreCode from '.';

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
describe('screen: TransactionDetails/MsgStoreCode', () => {
  it('matches snapshot', () => {
    const message = new MsgStoreCode({
      type: 'MsgStoreCode',
      sender: 'sender',
    });
    const component = renderer.create(
      <MockTheme>
        <StoreCode
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
