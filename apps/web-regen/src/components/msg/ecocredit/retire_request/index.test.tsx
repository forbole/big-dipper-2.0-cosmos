import renderer from 'react-test-renderer';
import RetireRequest from '@/components/msg/ecocredit/retire_request';
import MsgRetireRequest from '@/models/msg/ecocredit/msg_retire_request';
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
describe('screen: TransactionDetails/RetireRequest', () => {
  it('matches snapshot', () => {
    const message: MsgRetireRequest = {
      category: 'ecocredit',
      type: 'MsgRetireRequest',
      holder: 'holder',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <RetireRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRetireRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
