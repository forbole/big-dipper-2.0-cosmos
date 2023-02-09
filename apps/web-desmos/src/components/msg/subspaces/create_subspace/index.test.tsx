import renderer from 'react-test-renderer';
import CreateSubspace from '@/components/msg/subspaces/create_subspace';
import MsgCreateSubspace from '@/models/msg/subspaces/msg_create_subspace';
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
describe('screen: TransactionDetails/CreateSubspace', () => {
  it('matches snapshot', () => {
    const message: MsgCreateSubspace = {
      category: 'subspaces',
      type: 'MsgCreateSubspace',
      creator: 'creator',
      description: 'description',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateSubspace message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
