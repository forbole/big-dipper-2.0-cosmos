import renderer from 'react-test-renderer';
import CreateUserGroup from '@/components/msg/subspaces/create_user_group';
import MsgCreateUserGroup from '@/models/msg/subspaces/msg_create_user_group';
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
describe('screen: TransactionDetails/CreateUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgCreateUserGroup = {
      category: 'subspaces',
      type: 'MsgCreateUserGroup',
      creator: 'creator',
      name: 'name',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
