import UpdateWhiteListValidator from '@/components/msg/ethbridge/update_whitelist_validator';
import MsgUpdateWhitelistValidator from '@/models/msg/ethbridge/msg_update_whitelist_validator';
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
describe('screen: TransactionDetails/MsgUpdateWhitelistValidator', () => {
  it('matches snapshot', () => {
    const message: MsgUpdateWhitelistValidator = {
      category: 'dispensation',
      type: 'MsgBurn',
      cosmosSender: 'cosmosSender',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <UpdateWhiteListValidator message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgUpdateWhitelistValidator'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
