import renderer from 'react-test-renderer';
import AcceptPostOwnerTransferRequest from '@/components/msg/posts/accept_post_owner_transfer_request';
import MsgAcceptPostOwnerTransferRequest from '@/models/msg/posts/msg_accept_post_owner_transfer_request';
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
describe('screen: TransactionDetails/AcceptPostOwnerTransferRequest', () => {
  it('matches snapshot', () => {
    const message: MsgAcceptPostOwnerTransferRequest = {
      category: 'posts',
      type: 'MsgAcceptPostOwnerTransferRequest',
      receiver: 'receiver',
      post_id: '1',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AcceptPostOwnerTransferRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
