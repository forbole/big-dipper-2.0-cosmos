import renderer from 'react-test-renderer';
import SetDefaultExternalAddress from '@/components/msg/profiles/set_default_external_address';
import MsgSetDefaultExternalAddress from '@/models/msg/profiles/msg_set_default_external_address';
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
describe('screen: TransactionDetails/SetDefaultExternalAddress', () => {
  it('matches snapshot', () => {
    const message: MsgSetDefaultExternalAddress = {
      category: 'profiles',
      type: 'MsgSetDefaultExternalAddress',
      chainName: 'desmos',
      target: 'target',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <SetDefaultExternalAddress message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
