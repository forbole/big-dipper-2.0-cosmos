import renderer from 'react-test-renderer';
import UnBlockUser from '@/components/msg/profiles/unblock_user';
import { MsgUnblockUser } from '@/models';
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
describe('screen: TransactionDetails/UnBlockUser', () => {
  it('matches snapshot', () => {
    const message = MsgUnblockUser.fromJson({
      category: 'profiles',
      type: 'MsgUnblockUser',
      reason: 'reason',
      blocked: 'blocked',
      blocker: 'blocker',
      subspace: 'subspace',
    });
    const component = renderer.create(
      <MockTheme>
        <UnBlockUser message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
