import CreatePeriodicVestingAccount from '@/components/msg/vesting/create_periodic_vesting_account';
import MsgCreatePeriodicVestingAccount from '@/models/msg/vesting/msg_create_periodic_vesting_account';
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
    const message = MsgCreatePeriodicVestingAccount.fromJson({
      category: 'vesting',
      type: 'MsgGrant',
      to_address: 'toAddress',
      from_address: 'fromAddress',
    });
    const component = renderer.create(
      <MockTheme>
        <CreatePeriodicVestingAccount message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();

    expect(component.root.findByProps({ id: 'Trans' }).props.i18nKey).toEqual(
      'message_contents:MsgCreatePeriodicVestingAccount'
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
