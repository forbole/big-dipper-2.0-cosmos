import renderer from 'react-test-renderer';
import CancelReplaceMarketOrder from '@/components/msg/market/cancel_replace_market_order';
import MsgCancelReplaceMarketOrder from '@/models/msg/market/msg_cancel_replace_market_order';
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
describe('screen: TransactionDetails/CancelReplaceMarketOrder', () => {
  it('matches snapshot', () => {
    const message: MsgCancelReplaceMarketOrder = {
      category: 'market',
      type: 'MsgCancelReplaceMarketOrder',
      owner: 'owner',
      originalClientOrderId: 'originalClientOrderId',
      newClientOrderId: 'newClientOrderId',
      timeInForce: 'Unspecified',
      source: 'source',
      destination: {
        denom: 'udarics',
        amount: '500000',
      },
      maximumSlippage: '0.1',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CancelReplaceMarketOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
