import renderer from 'react-test-renderer';
import EditSubspace from '@/components/msg/subspaces/edit_subspace';
import MsgEditSubspace from '@/models/msg/subspaces/msg_edit_subspace';
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
describe('screen: TransactionDetails/EditSubspace', () => {
  it('matches snapshot', () => {
    const message: MsgEditSubspace = {
      category: 'subspaces',
      type: 'MsgEditSubspace',
      signer: 'signer',
      description: 'description',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditSubspace message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
