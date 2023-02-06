import renderer from 'react-test-renderer';
import EditNFT from '@/components/msg/nft/edit_nft';
import MsgEditNFT from '@/models/msg/nft/msg_edit_nft';
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
describe('screen: TransactionDetails/EditNFT', () => {
  it('matches snapshot', () => {
    const message: MsgEditNFT = {
      category: 'nft',
      type: 'MsgEditNFT',
      sender: 'desmosvaloper14nfk5gm99gfrd7nwqtmtvzunzclz8720a6cqh7',
      id: 'goodGoodDayDay',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditNFT message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
