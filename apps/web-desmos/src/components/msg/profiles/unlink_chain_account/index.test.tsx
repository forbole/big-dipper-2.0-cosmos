import renderer from 'react-test-renderer';
import UnlinkChainAccount from '@/components/msg/profiles/unlink_chain_account';
import MsgUnlinkChainAccount from '@/models/msg/profiles/msg_unlink_chain_account';
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
describe('screen: TransactionDetails/UnlinkChainAccount', () => {
  it('matches snapshot', () => {
    const message: MsgUnlinkChainAccount = {
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      owner: 'owner',
      chainName: 'chainName',
      target: 'target',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UnlinkChainAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
