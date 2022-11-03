import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUnlinkChainAccount } from '@models';
import UnlinkChainAccount from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Name: (props: JSX.IntrinsicElements['div']) => <div id="Name" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UnlinkChainAccount', () => {
  it('matches snapshot', () => {
    const message = new MsgUnlinkChainAccount({
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      owner: 'owner',
      chainName: 'chainName',
    });
    const component = renderer.create(
      <MockTheme>
        <UnlinkChainAccount
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
