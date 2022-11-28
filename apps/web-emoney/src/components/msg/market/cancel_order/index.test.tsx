import CancelOrder from '@/components/msg/market/cancel_order';
import MsgCancelOrder from '@/models/msg/market/msg_cancel_order';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================
jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/CancelOrder', () => {
  it('matches snapshot', () => {
    const message: MsgCancelOrder = {
      category: 'market',
      type: 'MsgCancelOrder',
      owner: 'owner',
      clientOrderId: 'clientOrderId',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CancelOrder message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
