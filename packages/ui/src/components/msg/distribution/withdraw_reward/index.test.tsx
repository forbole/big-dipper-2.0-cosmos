import renderer from 'react-test-renderer';
import WithdrawReward from '@/components/msg/distribution/withdraw_reward';
import { MsgWithdrawDelegatorReward } from '@/models';
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
describe('screen: TransactionDetails/WithdrawReward', () => {
  it('matches snapshot', () => {
    const message = MsgWithdrawDelegatorReward.fromJson({
      category: 'distribution',
      type: 'MsgWithdrawDelegatorReward',
      delegator_address: 'delegatorAddress',
      validator_address: 'validatorAddress',
      amounts: [
        {
          value: '3000000',
          displayDenom: 'udaric',
          exponent: 6,
        },
      ],
    });
    const component = renderer.create(
      <MockTheme>
        <WithdrawReward message={message} />
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
