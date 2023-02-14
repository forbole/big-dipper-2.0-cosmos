import renderer from 'react-test-renderer';
import DeleteSubspace from '@/components/msg/subspaces/delete_subspace';
import MsgDeleteSubspace from '@/models/msg/subspaces/msg_delete_subspace';
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
describe('screen: TransactionDetails/DeleteSubspace', () => {
  it('matches snapshot', () => {
    const message: MsgDeleteSubspace = {
      category: 'subspaces',
      type: 'MsgDeleteSubspace',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeleteSubspace message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
