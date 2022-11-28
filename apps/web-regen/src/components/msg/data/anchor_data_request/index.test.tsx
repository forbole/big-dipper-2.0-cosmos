import AnchorDataRequest from '@/components/msg/data/anchor_data_request';
import MsgAnchorDataRequest from '@/models/msg/data/msg_anchor_data_request';
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
describe('screen: TransactionDetails/AnchorDataRequest', () => {
  it('matches snapshot', () => {
    const message: MsgAnchorDataRequest = {
      category: 'data',
      type: 'MsgAnchorDataRequest',
      sender: 'sender',
      json: {},
    };

    const component = renderer.create(
      <MockTheme>
        <AnchorDataRequest message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgAnchorDataRequest'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
