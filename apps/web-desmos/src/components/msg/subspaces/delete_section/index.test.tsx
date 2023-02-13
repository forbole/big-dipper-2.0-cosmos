import renderer from 'react-test-renderer';
import DeleteSection from '@/components/msg/subspaces/delete_section';
import MsgDeleteSection from '@/models/msg/subspaces/msg_delete_section';
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
describe('screen: TransactionDetails/DeleteSection', () => {
  it('matches snapshot', () => {
    const message: MsgDeleteSection = {
      category: 'subspaces',
      type: 'MsgDeleteSection',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeleteSection message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
