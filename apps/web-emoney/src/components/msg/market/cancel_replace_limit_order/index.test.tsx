import renderer from 'react-test-renderer';
import CancelReplaceLimitOrder from '@/components/msg/market/cancel_replace_limit_order';
import MsgCancelReplaceLimitOrder from '@/models/msg/market/msg_cancel_replace_limit_order';
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
describe('screen: TransactionDetails/CancelReplaceLimitOrder', () => {
  it('matches snapshot', () => {
    const message: MsgCancelReplaceLimitOrder = {
      category: 'market',
      type: 'MsgAddLimitOrder',
      owner: 'owner',
      originalClientOrderId: 'originalClientOrderId',
      newClientOrderId: 'newClientOrderId',
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
        <CancelReplaceLimitOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
