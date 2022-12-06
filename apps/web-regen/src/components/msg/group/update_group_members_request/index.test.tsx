import UpdateGroupMembersRequest from '@/components/msg/group/update_group_members_request';
import MsgUpdateGroupMembersRequest from '@/models/msg/group/msg_update_group_members_request';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
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
      json: {},
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
