import renderer from 'react-test-renderer';
import MovePost from '@/components/msg/posts/move_post';
import MsgMovePost from '@/models/msg/posts/msg_move_post';
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
describe('screen: TransactionDetails/MovePost', () => {
  it('matches snapshot', () => {
    const message: MsgMovePost = {
      category: 'posts',
      type: 'MsgMovePost',
      owner: 'owner',
          post_id: '1',
          subspace_id:'subspace-id-1',
          target_subspace_id: 'subspace-id-2',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <MovePost message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
