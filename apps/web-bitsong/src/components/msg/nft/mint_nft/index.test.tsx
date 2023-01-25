import renderer from 'react-test-renderer';
import MintNFT from '@/components/msg/nft/mint_nft';
import MsgMintNFT from '@/models/msg/nft/msg_mint_nft';
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
describe('screen: TransactionDetails/MintNFT', () => {
  it('matches snapshot', () => {
    const message: MsgMintNFT = {
      category: 'nft',
      type: 'MsgMintNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <MintNFT message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
