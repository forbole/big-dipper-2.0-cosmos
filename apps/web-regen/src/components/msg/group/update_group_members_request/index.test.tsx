import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupMembersRequest from '@models/regen/msg/group/msg_update_group_members_request';
import UpdateGroupMembersRequest from '.';

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
describe('screen: TransactionDetails/UpdateGroupMembersRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupMembersRequest = {
      category: 'group',
      type: 'MsgUpdateGroupMembersRequest',
      admin: 'admin',
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupMembersRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupMembersRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
