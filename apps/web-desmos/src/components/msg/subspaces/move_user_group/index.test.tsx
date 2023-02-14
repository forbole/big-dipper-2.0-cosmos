import renderer from 'react-test-renderer';
import MoveUserGroup from '@/components/msg/subspaces/move_user_group';
import MsgMoveUserGroup from '@/models/msg/subspaces/msg_move_user_group';
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
describe('screen: TransactionDetails/MoveUserGroup', () => {
  it('matches snapshot', () => {
    const message: MsgMoveUserGroup = {
      category: 'subspaces',
      type: 'MsgMoveUserGroup',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <MoveUserGroup message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
