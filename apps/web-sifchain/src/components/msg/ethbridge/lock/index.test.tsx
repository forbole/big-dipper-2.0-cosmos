import Lock from '@/components/msg/ethbridge/lock';
import MsgLock from '@/models/msg/ethbridge/msg_lock';
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
describe('screen: TransactionDetails/MsgLock', () => {
  it('matches snapshot', () => {
    const message: MsgLock = {
      category: 'dispensation',
      type: 'MsgCreateDistribution',
      cosmosSender: 'cosmosSender',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <Lock message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgLock'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
