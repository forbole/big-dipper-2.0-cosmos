import renderer from 'react-test-renderer';
import EditSection from '@/components/msg/subspaces/edit_section';
import MsgEditSection from '@/models/msg/subspaces/msg_edit_section';
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
describe('screen: TransactionDetails/EditSection', () => {
  it('matches snapshot', () => {
    const message: MsgEditSection = {
      category: 'subspaces',
      type: 'MsgEditSection',
      editor: 'editor',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <EditSection message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
