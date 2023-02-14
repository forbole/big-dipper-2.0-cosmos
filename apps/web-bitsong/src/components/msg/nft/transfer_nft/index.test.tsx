import renderer from 'react-test-renderer';
import TransferNFT from '@/components/msg/nft/transfer_nft';
import MsgTransferNFT from '@/models/msg/nft/msg_transfer_nft';
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
describe('screen: TransactionDetails/TransferNFT', () => {
  it('matches snapshot', () => {
    const message: MsgTransferNFT = {
      category: 'nft',
      type: 'MsgMintNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
      recipient: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <TransferNFT message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
