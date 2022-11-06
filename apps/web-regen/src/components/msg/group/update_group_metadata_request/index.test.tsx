import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import { MsgUpdateGroupMetadataRequest } from '@models';
import UpdateGroupMetadataRequest from '.';

// ==================================
// mocks
// ==================================

jest.mock('@components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props) => <div id="Trans" {...props} />);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/UpdateGroupMetadataRequest', () => {
  it('matches snapshot', () => {
    const message = new MsgUpdateGroupMetadataRequest({
      category: 'group',
      type: 'MsgUpdateGroupMembersRequest',
      admin: 'admin',
    });

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupMetadataRequest message={message} />
      </MockTheme>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupMetadataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
