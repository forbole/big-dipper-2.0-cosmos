import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnblockUser } from '@models';
import UnBlockUser from '.';

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
describe('screen: TransactionDetails/UnBlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgUnblockUser({
      category: 'profiles',
      type: 'MsgUnblockUser',
      reason: 'reason',
      blocked: 'blocked',
      blocker: 'blocker',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <UnBlockUser
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
