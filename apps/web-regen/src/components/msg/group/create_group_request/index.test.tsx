import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgCreateGroupRequest from '@models/regen/msg/group/msg_create_group_request';
import CreateGroupRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('ui/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CreateGroupRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateGroupRequest = {
      category: 'group',
      type: 'MsgCreateGroupRequest',
      admin: 'admin',
    };

    const component = renderer.create(
      <MockTheme>
        <CreateGroupRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateGroupRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
