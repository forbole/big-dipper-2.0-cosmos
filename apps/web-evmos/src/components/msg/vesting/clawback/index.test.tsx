import renderer from 'react-test-renderer';
import Clawback from '@/components/msg/vesting/clawback';
import MsgClawback from '@/models/msg/vesting/msg_clawback';
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
describe('screen: TransactionDetails/Clawback', () => {
  it('matches snapshot', () => {
    const message: MsgClawback = {
      category: 'vesting',
      type: 'MsgClawback',
      accountAddress: 'accountAddress',
      destAddress: 'destAddress',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Clawback message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ 'data-testid': 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgClawback'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
