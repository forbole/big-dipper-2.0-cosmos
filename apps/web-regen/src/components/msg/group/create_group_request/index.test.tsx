import renderer from 'react-test-renderer';
import CreateGroupRequest from '@/components/msg/group/create_group_request';
import MsgCreateGroupRequest from '@/models/msg/group/msg_create_group_request';
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
describe('screen: TransactionDetails/CreateGroupRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateGroupRequest = {
      category: 'group',
      type: 'MsgCreateGroupRequest',
      admin: 'admin',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <CreateGroupRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateGroupRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
