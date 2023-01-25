import renderer from 'react-test-renderer';
import BurnTokens from '@/components/msg/liquidity_provider/burn_tokens';
import MsgBurnTokens from '@/models/msg/liquidity_provider/msg_burn_tokens';
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
describe('screen: TransactionDetails/BurnTokens', () => {
  it('matches snapshot', () => {
    const message: MsgBurnTokens = {
      category: 'liquidityProvider',
      type: 'MsgBurnTokens',
      liquidityProvider: 'liquidityProvider',
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
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <BurnTokens message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
