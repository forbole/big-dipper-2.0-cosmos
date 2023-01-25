import renderer from 'react-test-renderer';
import AddMarketOrder from '@/components/msg/market/add_market_order';
import MsgAddMarketOrder from '@/models/msg/market/msg_add_market_order';
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
    const message: MsgAddMarketOrder = {
      category: 'market',
      type: 'MsgAddMarketOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      timeInForce: 'Unspecified',
      source: 'source',
      destination: {
        denom: 'udarics',
        amount: '500000',
      },
      maximumSlippage: '0.05',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <AddMarketOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
