import renderer from 'react-test-renderer';
import SignDataRequest from '@/components/msg/data/sign_data_request';
import MsgSignDataRequest from '@/models/msg/data/msg_sign_data_request';
import MockTheme from '@/tests/mocks/MockTheme';

// ==================================
// mocks
// ==================================
jest.mock(
  '@/components/msg/data/sign_data_request/components/signers',
  () => (props: JSX.IntrinsicElements['div']) => <div id="Signers" {...props} />
);

// ==================================
// unit tests
// ==================================
describe('screen: TransactionDetails/SignDataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgSignDataRequest = {
      category: 'data',
      type: 'MsgAnchorDataRequest',
      signers: [
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
        'desmos1hfhkduejung7g29wv863x369rndf3hu5xj4g93',
      ],
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <SignDataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgSignDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
