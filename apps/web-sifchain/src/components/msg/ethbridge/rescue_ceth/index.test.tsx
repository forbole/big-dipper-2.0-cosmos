import RescueCeth from '@/components/msg/ethbridge/rescue_ceth';
import MsgRescueCeth from '@/models/msg/ethbridge/msg_rescue_ceth';
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
describe('screen: TransactionDetails/MsgRescueCeth', () => {
  it('matches snapshot', () => {
    const message: MsgRescueCeth = {
      category: 'dispensation',
      type: 'MsgRescueCeth',
      cosmosSender: 'cosmosSender',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <RescueCeth message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgRescueCeth'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
