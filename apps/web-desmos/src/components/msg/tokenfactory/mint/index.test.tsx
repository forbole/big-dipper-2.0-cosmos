import renderer from 'react-test-renderer';
import Mint from '@/components/msg/tokenfactory/mint';
import MsgMint from '@/models/msg/tokenfactory/msg_mint';
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
describe('screen: TransactionDetails/Mint', () => {
  it('matches snapshot', () => {
    const message: MsgMint = {
      category: 'tokenfactory',
      type: 'MsgMint',
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
        <Mint message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
