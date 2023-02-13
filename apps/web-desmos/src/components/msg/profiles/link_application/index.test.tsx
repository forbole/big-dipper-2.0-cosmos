import renderer from 'react-test-renderer';
import LinkApplication from '@/components/msg/profiles/link_application';
import MsgLinkApplication from '@/models/msg/profiles/msg_link_application';
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
describe('screen: TransactionDetails/LinkApplication', () => {
  it('matches snapshot', () => {
    const message: MsgLinkApplication = {
      category: 'profiles',
      type: 'MsgLinkApplication',
      sender: 'sender',
      linkData: {
        application: 'application',
        username: 'username',
      },
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <LinkApplication message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
