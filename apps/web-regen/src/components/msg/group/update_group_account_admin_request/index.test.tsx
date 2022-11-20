import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupAccountAdminRequest from '@models/regen/msg/group/msg_update_group_account_admin_request';
import UpdateGroupAccountAdminRequest from '.';

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
describe('screen: TransactionDetails/UpdateGroupAccountAdminRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupAccountAdminRequest = {
      category: 'group',
      type: 'MsgUpdateGroupAccountAdminRequest',
      admin: 'admin',
      newAdmin: 'newAdmin',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAccountAdminRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountAdminRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
