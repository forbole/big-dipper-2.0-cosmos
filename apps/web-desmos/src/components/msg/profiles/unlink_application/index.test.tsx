import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUnlinkApplication from '@models/desmos/msg/profiles/msg_unlink_application';
import UnlinkApplication from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/MsgUnlinkApplication', () => {
  it('matches snapshot', () => {
    const message = new MsgUnlinkApplication({
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      signer: 'signer',
      application: 'application',
      username: 'username',
    });
    const component = renderer.create(
      <MockTheme>
        <UnlinkApplication message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
