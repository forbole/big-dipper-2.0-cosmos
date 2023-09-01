import renderer from 'react-test-renderer';
import CreateDenom from '@/components/msg/tokenfactory/create_denom';
import MsgCreateDenom from '@/models/msg/tokenfactory/msg_create_denom';
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
describe('screen: TransactionDetails/CreateDenom', () => {
  it('matches snapshot', () => {
    const message: MsgCreateDenom = {
      category: 'tokenfactory',
      type: 'MsgCreateDenom',
      sender: 'sender',
      subdenom: 'subdenom',
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateDenom message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
