import renderer from 'react-test-renderer';
import RefusePostOwnerTransferRequest from '@/components/msg/posts/refuse_post_owner_transfer_request';
import MsgRefusePostOwnerTransferRequest from '@/models/msg/posts/msg_refuse_post_owner_transfer_request';
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
describe('screen: TransactionDetails/RefusePostOwnerTransferRequest', () => {
  it('matches snapshot', () => {
    const message: MsgRefusePostOwnerTransferRequest = {
      category: 'posts',
      type: 'MsgRefusePostOwnerTransferRequest',
      receiver: 'receiver',
      post_id: '1',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RefusePostOwnerTransferRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
