import renderer from 'react-test-renderer';
import SetUserPermissions from '@/components/msg/subspaces/set_user_permissions';
import MsgSetUserPermissions from '@/models/msg/subspaces/msg_set_user_permissions';
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
describe('screen: TransactionDetails/SetUserPermissions', () => {
  it('matches snapshot', () => {
    const message: MsgSetUserPermissions = {
      category: 'subspaces',
      type: 'MsgSetUserPermissions',
      signer: 'signer',
      json: {
        user: 'user',
      },
    };
    const component = renderer.create(
      <MockTheme>
        <SetUserPermissions message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
