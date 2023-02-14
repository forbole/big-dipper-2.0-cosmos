import renderer from 'react-test-renderer';
import CreateSection from '@/components/msg/subspaces/create_section';
import MsgCreateSection from '@/models/msg/subspaces/msg_create_section';
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
describe('screen: TransactionDetails/CreateSection', () => {
  it('matches snapshot', () => {
    const message: MsgCreateSection = {
      category: 'subspaces',
      type: 'MsgCreateSection',
      creator: 'creator',
      name: 'name',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateSection message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
