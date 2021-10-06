import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgInstantiateContract } from '@models';
import InstantiateContract from '.';

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
describe('screen: TransactionDetails/MsgInstantiateContract', () => {
  it('matches snapshot', () => {
    const message = new MsgInstantiateContract({
      type: 'MsgInstantiateContract',
      sender: 'sender',
      codeId: 1000,
    });
    const component = renderer.create(
      <MockTheme>
        <InstantiateContract
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
