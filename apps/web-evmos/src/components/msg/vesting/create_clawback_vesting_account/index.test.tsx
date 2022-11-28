import CreateClawbackVestingAccount from '@/components/msg/vesting/create_clawback_vesting_account';
import MsgCreateClawbackVestingAccount from '@/models/msg/vesting/msg_create_clawback_vesting_account';
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
describe('screen: TransactionDetails/Grant', () => {
  it('matches snapshot', () => {
    const message: MsgCreateClawbackVestingAccount = {
      category: 'vesting',
      type: 'MsgGrant',
      toAddress: 'toAddress',
      fromAddress: 'fromAddress',
      json: {},
    };
    const component = renderer.create(
      <MockTheme>
        <CreateClawbackVestingAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreateClawbackVestingAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
