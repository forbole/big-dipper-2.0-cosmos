import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCreateRelationship from '@models/desmos/msg/profiles/msg_create_relationship';
import CreateRelationship from '.';

// ==================================
// mocks
// ==================================
jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateRelationship', () => {
  it('matches snapshot', () => {
    const message = new MsgCreateRelationship({
      category: 'profiles',
      type: 'MsgCreateRelationship',
      sender: 'sender',
      receiver: 'receiver',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <CreateRelationship message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
