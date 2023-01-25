import renderer from 'react-test-renderer';
import StoreRawDataRequest from '@/components/msg/data/store_raw_data_request';
import MsgStoreRawDataRequest from '@/models/msg/data/msg_store_raw_data_request';
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
describe('screen: TransactionDetails/StoreRawDataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgStoreRawDataRequest = {
      category: 'data',
      type: 'MsgStoreRawDataRequest',
      sender: 'sender',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <StoreRawDataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgStoreRawDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
