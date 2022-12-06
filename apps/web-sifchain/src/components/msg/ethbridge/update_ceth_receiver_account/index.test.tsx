import UpdateCethReceiverAccount from '@/components/msg/ethbridge/update_ceth_receiver_account';
import MsgUpdateCethReceiverAccount from '@/models/msg/ethbridge/msg_update_ceth_receiver_account';
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
describe('screen: TransactionDetails/CreateEthBridgeClaim', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateCethReceiverAccount = {
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
      cethReceiverAccount: 'cethReceiverAccount',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UpdateCethReceiverAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateCethReceiverAccount'
    );
    expect(component.root.findByProps({ id: 'Trans' }).props.values.cethReceiverAccount).toEqual(
      'cethReceiverAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
