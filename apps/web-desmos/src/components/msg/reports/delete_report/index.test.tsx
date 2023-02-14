import renderer from 'react-test-renderer';
import DeleteReport from '@/components/msg/reports/delete_report';
import MsgDeleteReport from '@/models/msg/reports/msg_delete_report';
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
describe('screen: TransactionDetails/DeleteReport', () => {
  it('matches snapshot', () => {
    const message: MsgDeleteReport = {
      category: 'reports',
      type: 'MsgDeleteReport',
      signer: 'signer',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <DeleteReport message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
