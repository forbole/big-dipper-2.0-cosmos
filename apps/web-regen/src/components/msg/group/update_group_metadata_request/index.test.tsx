import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from 'ui/tests/utils';
import MsgUpdateGroupMetadataRequest from '@models/regen/msg/group/msg_update_group_metadata_request';
import UpdateGroupMetadataRequest from '.';

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
describe('screen: TransactionDetails/UpdateGroupMetadataRequest', () => {
  it('matches snapshot', () => {
    const message = {
      category: 'group',
      type: 'MsgUpdateGroupMembersRequest',
      admin: 'admin',
    } as MsgUpdateGroupMetadataRequest;

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupMetadataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupMetadataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
