import CreateBatchRequest from '@/components/msg/ecocredit/create_batch_request';
import MsgCreateBatchRequest from '@/models/msg/ecocredit/msg_create_batch_request';
import { MockTheme } from '@/tests/utils';
import renderer from 'react-test-renderer';

// ==================================
// mocks
// ==================================

jest.mock('@/components/name', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Name" {...props} />
));

jest.mock('next-translate/Trans', () => (props: JSX.IntrinsicElements['div']) => (
  <div id="Trans" {...props} />
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

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateBatchRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
