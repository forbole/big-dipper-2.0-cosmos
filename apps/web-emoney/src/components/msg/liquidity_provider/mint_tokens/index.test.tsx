import renderer from 'react-test-renderer';
import MintTokens from '@/components/msg/liquidity_provider/mint_tokens';
import MsgMintTokens from '@/models/msg/liquidity_provider/msg_mint_tokens';
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
describe('screen: TransactionDetails/MintTokens', () => {
  it('matches snapshot', () => {
    const message: MsgMintTokens = {
      category: 'liquidityProvider',
      type: 'MsgMintTokens',
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
        <MintTokens message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
