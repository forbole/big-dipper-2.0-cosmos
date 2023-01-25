import renderer from 'react-test-renderer';
import UnlinkApplication from '@/components/msg/profiles/unlink_application';
import MsgUnlinkApplication from '@/models/msg/profiles/msg_unlink_application';
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
describe('screen: TransactionDetails/MsgUnlinkApplication', () => {
  it('matches snapshot', () => {
    const message: MsgUnlinkApplication = {
      category: 'profiles',
      type: 'MsgUnlinkChainAccount',
      signer: 'signer',
      application: 'application',
      username: 'username',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UnlinkApplication message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
