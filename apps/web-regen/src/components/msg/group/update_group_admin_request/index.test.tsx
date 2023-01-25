import renderer from 'react-test-renderer';
import UpdateGroupAdminRequest from '@/components/msg/group/update_group_admin_request';
import MsgUpdateGroupAdminRequest from '@/models/msg/group/msg_update_group_admin_request';
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

describe('screen: TransactionDetails/UpdateGroupAdminRequest', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateGroupAdminRequest = {
      category: 'group',
      type: 'MsgUpdateGroupAdminRequest',
      admin: 'admin',
      newAdmin: 'newAdmin',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <UpdateGroupAdminRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateGroupAdminRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
