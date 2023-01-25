import renderer from 'react-test-renderer';
import CreateBatchRequest from '@/components/msg/ecocredit/create_batch_request';
import MsgCreateBatchRequest from '@/models/msg/ecocredit/msg_create_batch_request';
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
describe('screen: TransactionDetails/CreateBatchRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateBatchRequest = {
      category: 'ecocredit',
      type: 'MsgCreateBatchRequest',
      issuer: 'issuer',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <CreateBatchRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateBatchRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
