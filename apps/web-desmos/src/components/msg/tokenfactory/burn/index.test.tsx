import renderer from 'react-test-renderer';
import Burn from '@/components/msg/tokenfactory/burn';
import MsgBurn from '@/models/msg/tokenfactory/msg_burn';
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
describe('screen: TransactionDetails/Burn', () => {
  it('matches snapshot', () => {
    const message: MsgBurn = {
      category: 'tokenfactory',
      type: 'MsgBurn',
      sender: 'sender',
      amount: [
        {
          denom: 'denom1',
          amount: '100000',
        },
        {
          denom: 'denom2',
          amount: '200000',
        },
      ],
      subspace_id: 'subspace-id-1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Burn message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
