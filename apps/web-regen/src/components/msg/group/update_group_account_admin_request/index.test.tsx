import renderer from 'react-test-renderer';
import UpdateGroupAccountAdminRequest from '@/components/msg/group/update_group_account_admin_request';
import MsgUpdateGroupAccountAdminRequest from '@/models/msg/group/msg_update_group_account_admin_request';
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

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAccountAdminRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
