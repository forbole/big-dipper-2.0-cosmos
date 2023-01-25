import renderer from 'react-test-renderer';
import UpdateGroupMembersRequest from '@/components/msg/group/update_group_members_request';
import MsgUpdateGroupMembersRequest from '@/models/msg/group/msg_update_group_members_request';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
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

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupMembersRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
