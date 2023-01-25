import renderer from 'react-test-renderer';
import AddLimitOrder from '@/components/msg/market/add_limit_order';
import MsgAddLimitOrder from '@/models/msg/market/msg_add_limit_order';
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
describe('screen: TransactionDetails/AddLimitOrder', () => {
  it('matches snapshot', () => {
    const message: MsgAddLimitOrder = {
      category: 'market',
      type: 'MsgAddLimitOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      timeInForce: 'Unspecified',
      source: {
        denom: 'udaric',
        amount: '100000',
      },
      destination: {
        denom: 'udarics',
        amount: '500000',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddLimitOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
