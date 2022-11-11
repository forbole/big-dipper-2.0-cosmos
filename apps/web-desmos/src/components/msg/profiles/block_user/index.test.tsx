import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgBlockUser from '@models/desmos/msg/profiles/msg_block_user';
import BlockUser from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/BlockUser', () => {
  it('matches snapshot', () => {
    const message = new MsgBlockUser({
      category: 'profiles',
      type: 'MsgBlockUser',
      blocked: 'blocked',
      blocker: 'blocker',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <BlockUser message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
