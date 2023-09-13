import renderer from 'react-test-renderer';
import CancelPostOwnerTransferRequest from '@/components/msg/posts/cancel_post_owner_transfer_request';
import MsgCancelPostOwnerTransferRequest from '@/models/msg/posts/msg_cancel_post_owner_transfer_request';
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
describe('screen: TransactionDetails/CancelPostOwnerTransferRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCancelPostOwnerTransferRequest = {
      category: 'posts',
      type: 'MsgCancelPostOwnerTransferRequest',
      sender: 'sender',
      post_id: '1',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CancelPostOwnerTransferRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
