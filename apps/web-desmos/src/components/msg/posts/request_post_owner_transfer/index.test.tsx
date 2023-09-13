import renderer from 'react-test-renderer';
import RequestPostOwnerTransfer from '@/components/msg/posts/request_post_owner_transfer';
import MsgRequestPostOwnerTransfer from '@/models/msg/posts/msg_request_post_owner_transfer';
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
describe('screen: TransactionDetails/RequestPostOwnerTransfer', () => {
  it('matches snapshot', () => {
    const message: MsgRequestPostOwnerTransfer = {
      category: 'posts',
      type: 'MsgRequestPostOwnerTransfer',
      sender: 'sender',
      receiver: 'receiver',
      post_id: '1',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RequestPostOwnerTransfer message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
