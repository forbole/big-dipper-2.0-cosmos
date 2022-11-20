import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUnlinkChainAccount from '@models/desmos/msg/profiles/msg_unlink_chain_account';
import UnlinkChainAccount from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UnlinkChainAccount', () => {
  it('matches snapshot', () => {
    const message: MsgUnlinkChainAccount = {
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      owner: 'owner',
      chainName: 'chainName',
      target: 'target',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UnlinkChainAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
