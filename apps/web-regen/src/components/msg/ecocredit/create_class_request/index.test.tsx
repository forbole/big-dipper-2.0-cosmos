import renderer from 'react-test-renderer';
import CreateClassRequest from '@/components/msg/ecocredit/create_class_request';
import MsgCreateClassRequest from '@/models/msg/ecocredit/msg_create_class_request';
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
describe('screen: TransactionDetails/CreateClassRequest', () => {
  it('matches snapshot', () => {
    const message: MsgCreateClassRequest = {
      category: 'ecocredit',
      type: 'MsgCreateClassRequest',
      designer: 'sender',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <CreateClassRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateClassRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
